import prisma from "@/lib/prisma";

export async function POST(request) {

    const projectData = await request.json();

    console.log("deleting project...");

    try {
        await prisma.projects.delete({
            where: {
                id: projectData.id,
            },
        })
        
        return new Response('Success!', {status: 200});
    }
    catch (error) {
        return new Response('Bad Email Request', {status: 400});
    }

}