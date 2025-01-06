import ValidateAdmin from "@/lib/validateAdmin";
import { headers } from 'next/headers';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const origin = async() => {
        const protocol = request.headers.get('x-forwarded-proto') || '';
        const hostname = request.headers.get('x-forwarded-host') || '';
    
        return `${protocol}://${hostname}`;
    }
    return await ValidateAdmin.checkIfNotAdmin(await origin());
    //return await ValidateAdmin.checkIfNotAdmin("https://nasean.dev:443");
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/admin((?!/login).)*',
}