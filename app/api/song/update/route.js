import prisma from "@/lib/prisma";
import minio from '@/lib/minio';
import ValidateAdmin from '@/lib/validateAdmin';
export async function POST(request) {

    const url = new URL(request.url);
    const origin = `${url.protocol}//${url.host}`;
    const isAdmin = await ValidateAdmin.isAdminAccess(origin);
    if(!isAdmin) {
        return new Response('Unauthorized', {status: 401});
    }

    const songData = await request.formData();

    console.log("updating song...");

    try {
        const currentSong = await prisma.songs.findUnique({
            where: {
                id: songData.get('id'),
            }
        });

        let cover_url_file = songData.get('cover_url_file');
        let audio_url_file = songData.get('audio_url_file');
        let cover_url_file_name = ""
        let audio_url_file_name = ""

        if (cover_url_file instanceof File) {   
            cover_url_file_name = cover_url_file.name.replace(/[^a-zA-Z0-9._-]/g, '-').toLowerCase();
            cover_url_file_name = `${minio.imageUrlPrefix}/${cover_url_file_name}`;
            await minio.client.removeObject(minio.bucket, currentSong.cover_url);
            await minio.client.putObject(minio.bucket, cover_url_file_name, Buffer.from(await cover_url_file.arrayBuffer()));
            console.log(`Cover file replaced:${cover_url_file_name}`);
        }
        if (audio_url_file instanceof File) {
            audio_url_file_name = audio_url_file.name.replace(/[^a-zA-Z0-9._-]/g, '-').toLowerCase();
            audio_url_file_name = `${minio.audioUrlPrefix}/${audio_url_file_name}`;
            await minio.client.removeObject(minio.bucket, currentSong.audio_url);
            await minio.client.putObject(minio.bucket, audio_url_file_name, Buffer.from(await audio_url_file.arrayBuffer()));
            console.log(`Audio file replaced:${audio_url_file_name}`);
        }

        await prisma.songs.update({
            where: {
                id: currentSong.id,
            },
            data: {
                title: songData.get('title'),
                genre: songData.get('genre'),
                description: songData.get('description'),
                cover_url: cover_url_file_name || currentSong.cover_url,
                audio_url: audio_url_file_name || currentSong.audio_url,
            },
        })
        console.log("Song Updated");
        return new Response('Success!', {status: 200});
    }
    catch (error) {
        return new Response('Bad Request', {status: 400});
    }

}