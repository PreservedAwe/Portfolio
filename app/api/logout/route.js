import { cookies } from 'next/headers';

export async function GET() {

    console.log("logging out...");

    if(cookies().has("admin")) {
        cookies().delete("admin")
        return new Response('Cookie Removed!', {status: 200});
    }
    else {
        return new Response('Cookie Not Present!', {status: 200});
    }   

}