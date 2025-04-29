import prisma from "@/lib/prisma";
import ValidateAdmin from '@/lib/validateAdmin';
export async function POST(request) {

    const isAdmin = await ValidateAdmin.isAdminAccess(request);
    if(!isAdmin) {
        return new Response('Unauthorized', {status: 401});
    }
    
    const projectData = await request.json();

    console.log("creating project...");

    try {
        await prisma.projects.create({
            data: {
                name: projectData.name,
                description: projectData.description,
                github_link: projectData.github_link,
                banner_url: projectData.banner_url,
            },
        })
        console.log("Project Created");
        return new Response('Success!', {status: 200});
    }
    catch (error) {
        console.log(error)
        return new Response('Bad Request', {status: 400});
    }

}