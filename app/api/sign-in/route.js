import { cookies } from 'next/headers';

export async function POST(request) {

    const messageData = await request.json();

    console.log("validating code...");

    if (messageData.code == process.env.ACCESS_CODE) {
        cookies().set('admin', 'access-pass', { maxAge: 600 });

        return new Response('Success!', {status: 200});
        
    }
    else {
        return new Response('Bad Email Request', {status: 400});
    }
}