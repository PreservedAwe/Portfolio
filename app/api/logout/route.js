import prisma from "@/lib/prisma";

export async function GET(request) {

    console.log("logging out...");

    if(request.cookies.has("client_id")) {
        try{
            const session = await prisma.sessions.delete({
                where: {
                    client_id: request.cookies.get("client_id").value,
                },
            })
            request.cookies.delete("client_id")

            return new Response('Session Removed!', {status: 200});
        }
        catch(error) {
            return new Response('No Session Was Removed!', {status: 200});
        }
    }

    else {
        return new Response('Cookie Not Present', {status: 400});
    }    

}