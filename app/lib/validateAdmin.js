import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

const ValidateAdmin = {
    checkIfNotAdmin: async(hostname) => {
        const cookieString = cookies().toString();
        console.log(hostname)
        const res = await fetch(hostname + "/api/sign-in", {
            headers: { Cookie: cookieString }
        })
        if(!res.ok) {
            return NextResponse.redirect(new URL('/', hostname));
        }
        else{
            return NextResponse.next();
        }
    },
    
    checkIfAdmin: async(hostname) => {
        const cookieString = cookies().toString();
        const res = await fetch(hostname + "/api/sign-in", {
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