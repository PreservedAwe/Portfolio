import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


const ValidateAdmin = {
    checkIfNotAdmin: () => {
        if(!cookies().has("admin")) {
            redirect("/");
        }
    },
    
    checkIfAdmin: () => {
        if(cookies().has("admin")) {
            redirect("/admin");
        }
    }    
}

export default ValidateAdmin