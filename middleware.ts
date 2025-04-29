import ValidateAdmin from "@/lib/validateAdmin";
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const allowedHosts = ['preserved.app', 'localhost:3000'];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const origin = () => {
        const protocol = request.headers.get('x-forwarded-proto') || '';
        const hostname = request.headers.get('x-forwarded-host') || '';

        const isAllowed = allowedHosts.some(allowed => hostname.endsWith(allowed));

        if (!isAllowed) {
            console.warn(`Suspicious x-forwarded-host: ${hostname} from ${request.ip}`);
            if (protocol == 'http'){
                return `${protocol}://${allowedHosts[1]}`;
            }
            else if (protocol == 'https'){
                return `${protocol}://${allowedHosts[0]}`;
            }
        }
        return `${protocol}://${hostname}`;
    }
    return await ValidateAdmin.checkIfNotAdmin(origin());
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/admin((?!/login).)*',
}