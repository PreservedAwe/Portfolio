import LoginForm from '@/components/containers/LoginForm';
import ValidateAdmin from "@/lib/validateAdmin";

export default function Page() {
    
    ValidateAdmin.checkIfAdmin();
    
    return (
        <LoginForm/>
    );
}