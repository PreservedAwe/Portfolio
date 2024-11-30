import prisma from "@/lib/prisma";

export async function POST(request) {

    const projectData = await request.json();

    console.log("creating project...");

    console.log(projectData.name)
    console.log(projectData.description)
    console.log(projectData.github_link)

    try {
        await prisma.projects.create({
            data: {
                name: projectData.name,
                description: projectData.description,
                github_link: projectData.github_link,
            },
        })
        
        return new Response('Success!', {status: 200});
    }
    catch (error) {
        console.log(error)
        return new Response('Bad Email Request', {status: 400});
    }

}