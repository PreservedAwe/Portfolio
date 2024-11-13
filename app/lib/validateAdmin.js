import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextResponse, NextRequest } from 'next/server';


const ValidateAdmin = {
    checkIfNotAdmin: async(hostname) => {
        const cookieString = cookies().toString();
        const res = await fetch(process.env.HOST_NAME + "/api/sign-in", {
            headers: { Cookie: cookieString }
        })
        if(!res.ok) {
            return NextResponse.redirect(new URL('/', hostname));
        }
    },
    
    checkIfAdmin: async(hostname) => {
        const cookieString = cookies().toString();
        const res = await fetch(process.env.HOST_NAME + "/api/sign-in", {
            headers: { Cookie: cookieString }
        })
        if(res.ok) {
            redirect('/admin');
        }
    },

    redirectToAdmin: () => {
        redirect('/admin');
    }

}

export default ValidateAdmin