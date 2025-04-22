import ValidateAdmin from "@/lib/validateAdmin";
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const allowedHosts = ['.preserved.app'];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const origin = async() => {
        const protocol = request.headers.get('x-forwarded-proto') || '';
        const hostname = request.headers.get('x-forwarded-host') || '';

        const isAllowed = allowedHosts.some(allowed => hostname.endsWith(allowed));

        if (!isAllowed) {
            console.warn(`Suspicious x-forwarded-host: ${hostname} from ${request.ip}`);
            return NextResponse.redirect(new URL('/', request.url));
        }
        return `${protocol}://${hostname}`;
    }
    return await ValidateAdmin.checkIfNotAdmin(await origin());
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/admin((?!/login).)*',
}