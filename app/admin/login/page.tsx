import LoginForm from '@/app/components/containers/LoginForm';
import ValidateAdmin from "../../lib/validateAdmin";

export default function Page() {
    
    ValidateAdmin.checkIfAdmin();
    
    return (
        <LoginForm/>
    );
}