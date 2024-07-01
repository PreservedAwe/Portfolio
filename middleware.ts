import ValidateAdmin from "@/lib/validateAdmin";
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    return ValidateAdmin.checkIfNotAdmin(request.nextUrl.origin);
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/admin((?!/login).)*',
}