import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';


const ValidateAdmin = {
    checkIfNotAdmin: (hostname) => {
        if(!cookies().has("admin")) {
            return NextResponse.redirect(new URL('/', hostname));
        }
    },
    
    checkIfAdmin: () => {
        if(cookies().has("admin")) {
            redirect("/admin");
        }
    },
        
    redirectToAdmin: () => {
        redirect("/admin");
    }  
}

export default ValidateAdmin