import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import LoginForm from '@/app/components/containers/LoginForm';

export default function Page() {

    if(cookies().has("admin")) {
        redirect("/admin");
    }
    
    return (
        <LoginForm/>
    );
}