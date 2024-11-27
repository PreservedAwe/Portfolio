import LoginForm from '@/components/containers/LoginForm';
import ValidateAdmin from '@/lib/validateAdmin';
import { headers } from 'next/headers';
import Loader from "@/components/partials/Loader";
import { Suspense } from "react";

export default async function Page() {
    const origin = async() => {
        const headerList = await headers();
        
        const protocol = headerList.get('x-forwarded-proto') || '';
        const hostname = headerList.get('x-forwarded-host') || '';
    
        return `${protocol}://${hostname}`;
    }
    
    await ValidateAdmin.checkIfAdmin(await origin())

    return (
        <>
            <Suspense fallback={<Loader/>}>
                <Loader/>
                <LoginForm/>
            </Suspense>     
        </>
    );
}