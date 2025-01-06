import ValidateAdmin from "@/lib/validateAdmin";
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    //return await ValidateAdmin.checkIfNotAdmin(request.nextUrl.origin);
    return await ValidateAdmin.checkIfNotAdmin("https://nasean.dev:443");
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/admin((?!/login).)*',
}