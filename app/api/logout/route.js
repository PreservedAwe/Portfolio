import prisma from "@/lib/prisma";
import ValidateAdmin from '@/lib/validateAdmin';
export async function GET(request) {

    const url = new URL(request.url);
    const origin = `${url.protocol}//${url.host}`;
    const isAdmin = await ValidateAdmin.isAdminAccess(origin);
    if(!isAdmin) {
        return new Response('Unauthorized', {status: 401});
    }
    
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