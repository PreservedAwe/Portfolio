import prisma from "@/lib/prisma";

export async function POST(request) {

    const projectData = await request.json();

    console.log("updating project...");

    try {
        await prisma.projects.update({
            where: {
                id: projectData.id,
            },
            data: {
                name: projectData.name,
                description: projectData.description,
                github_link: projectData.github_link,
                banner_url: projectData.banner_url,
            },
        })
        console.log("Project Updated");
        return new Response('Success!', {status: 200});
    }
    catch (error) {
        return new Response('Bad Email Request', {status: 400});
    }

}