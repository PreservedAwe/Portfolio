import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

const ValidateAdmin = {
    checkIfNotAdmin: async(hostname) => {
        const cookieString = cookies().toString();
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

    isAdminAccess: async(request) => {
        const allowedHosts = ['preserved.app', 'localhost:3000'];
        const protocol = request.headers.get('x-forwarded-proto') || '';
        const hostname = request.headers.get('x-forwarded-host') || '';
        const isAllowed = allowedHosts.some(allowed => hostname.endsWith(allowed));
        let origin;
        if (!isAllowed) {
            if (protocol == 'http'){
                origin = `${protocol}://${allowedHosts[1]}`;
            }
            else if (protocol == 'https'){
                origin =  `${protocol}://${allowedHosts[0]}`;
            }
        }
        else{
            origin =  `${protocol}://${hostname}`;
        }
        const cookieString = cookies().toString();
        const res = await fetch(origin + "/api/sign-in", {
            headers: { Cookie: cookieString }
        })
        if(res.ok) {
            return true;
        }
        else {
            return false;
        }
    },

    redirectToAdmin: () => {
        redirect('/admin');
    }

}

export default ValidateAdmin