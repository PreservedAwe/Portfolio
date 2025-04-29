import LoginForm from '@/components/containers/LoginForm';
import ValidateAdmin from '@/lib/validateAdmin';
import { headers } from 'next/headers';
import { Suspense, memo } from "react";

export default memo(async function Page() {
    const allowedHosts = ['preserved.app', 'localhost:3000'];

    const origin = async() => {
        const headerList = await headers();
        
        const protocol = headerList.get('x-forwarded-proto') || '';
        const hostname = headerList.get('x-forwarded-host') || '';

        const isAllowed = allowedHosts.some(allowed => hostname.endsWith(allowed));

        if (!isAllowed) {
            if (protocol == 'http'){
                return `${protocol}://${allowedHosts[1]}`;
            }
            else if (protocol == 'https'){
                return `${protocol}://${allowedHosts[0]}`;
            }
        }
        return `${protocol}://${hostname}`;
    }
    await ValidateAdmin.checkIfAdmin(await origin())

    return (
        <>
            <LoginForm/>
        </>
    );
})