import { cookies } from 'next/headers';
import prisma from "@/lib/prisma";
import { createId } from '@paralleldrive/cuid2';

export async function POST(request) {

    const messageData = await request.json();

    console.log("validating code...");

    if (messageData.code == process.env.ACCESS_CODE) {
        try {
            const new_id = createId()
            await prisma.sessions.create({
                data: {
                    client_id: new_id,
                },
            })
            cookies().set('client_id', new_id, { maxAge: 600 });
            return new Response('Success!', {status: 200});
        }
        catch (error) {
            console.log(error)
            return new Response('Server Error', {status: 400});
        }
    }
    else {
        return new Response('Bad Password Request', {status: 400});
    }
}

export async function GET(request) {
    if(request.cookies.has("client_id")) {
        const session = await prisma.sessions.findUnique({
            where: {
                client_id: request.cookies.get("client_id").value,
            },
        })
        if(session != null){
            return new Response('Session Present!', {status: 200});
        }
        else {
            return new Response('Session Not Present', {status: 400});
        }  
    }
    else {
        return new Response('Cookie Not Present', {status: 400});
    }    
}