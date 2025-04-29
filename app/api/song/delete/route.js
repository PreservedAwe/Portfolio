import prisma from "@/lib/prisma";
import minio from '@/lib/minio';
import ValidateAdmin from '@/lib/validateAdmin';
export async function POST(request) {

    const isAdmin = await ValidateAdmin.isAdminAccess(request);
    if(!isAdmin) {
        return new Response('Unauthorized', {status: 401});
    }

    const songData = await request.json();

    console.log("deleting song...");

    try {
        const currentSong = await prisma.songs.findUnique({
            where: {
                id: songData.id,
            }
        });
        if(currentSong.audio_url != "") {
            await minio.client.removeObject(minio.bucket, currentSong.audio_url);
        }
        if(currentSong.cover_url != "") {
            await minio.client.removeObject(minio.bucket, currentSong.cover_url);    
        }
        console.log(`Cover and Audio files deleted for song with title ${currentSong.title}`);
        await prisma.songs.delete({
            where: {
                id: currentSong.id,
            },
        })
        console.log(`Song Deleted`);
        return new Response('Success!', {status: 200});
    }
    catch (error) {
        return new Response('Bad Request', {status: 400});
    }

}