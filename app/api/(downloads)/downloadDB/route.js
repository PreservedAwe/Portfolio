import fs from 'fs';
import path from 'path';
import prisma from "@/lib/prisma";

export async function GET(request) {
    if(request.cookies.has("client_id")) {
        const session = await prisma.sessions.findUnique({
            where: {
                client_id: request.cookies.get("client_id").value,
            },
        })
        if(session != null){
            const dbPath = path.join(process.cwd(), 'prisma', 'main.db');
            const fileName = 'main.db';
        
            if (!fs.existsSync(dbPath)) {
                return new Response('Database file not found', {status: 400});
            }
        
            try {
                const fileBuffer = fs.readFileSync(dbPath);
                return new Response(fileBuffer, {
                    status: 200,
                    headers: {
                        'Content-Disposition': `attachment; filename="${fileName}"`,
                        'Content-Type': 'application/octet-stream',
                    },
                });
            } 
            catch (error) {
                return new Response('Internal Server Error', {status: 400});
            }
        }
        else {
            return new Response('Not Admin, Permission Denied', {status: 400});
        }  
    }
    else {
        return new Response('Not Admin, Permission Denied', {status: 400});
    }  


}