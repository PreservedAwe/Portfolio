import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient();
const getPrismaClient = async() => {
    
    await prisma.$executeRaw`PRAGMA busy_timeout = 5000;`;
    return prisma;
}

//setBusyTimeout();
export default prisma;