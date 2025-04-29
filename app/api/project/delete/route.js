import prisma from "@/lib/prisma";
import ValidateAdmin from '@/lib/validateAdmin';
export async function POST(request) {

    const isAdmin = await ValidateAdmin.isAdminAccess(request);
    if(!isAdmin) {
        return new Response('Unauthorized', {status: 401});
    }

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
        return new Response('Bad Request', {status: 400});
    }

}