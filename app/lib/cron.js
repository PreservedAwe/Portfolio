import prisma from "@/lib/prisma";
import cron from "node-cron";

// Run every 2 minutes
console.log('Scheduling Session Checking Every 2 mins')
cron.schedule('*/2 * * * *', async () => {
    try {
        const thirtyMins = new Date(Date.now() - 1800000);
        const expiredSessions = await prisma.sessions.findMany({
        where: {
            createdAt: {
            lt: thirtyMins
            }
        }
        });

        if (expiredSessions.length > 0) {
            console.log(`Deleting ${expiredSessions.length} expired session(s)`)
            await prisma.sessions.deleteMany({
                where: {
                id: { in: expiredSessions.map(s => s.id) }
                }
            });
        } 
        else {
            }
    } 
    catch (error) {
        console.error('Error deleting expired sessions:', error);
    }
});

