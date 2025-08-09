import { PrismaClient } from '@prisma/client';
import sampleData from "./sample-data";

async function main() {
    const prisma = new PrismaClient();
    // await prisma.city.deleteMany();
    // await prisma.service.deleteMany();
    // await prisma.hotel.deleteMany();
    // await prisma.room.deleteMany();
    // await prisma.user.deleteMany();

    // await prisma.city.createMany({ data: sampleData.city });
    // await prisma.service.createMany({ data: sampleData.service });
    // await prisma.hotel.createMany({ data: sampleData.hotel });
    // await prisma.room.createMany({ data: sampleData.room });
    await prisma.user.createMany({ data: sampleData.users });


    console.log("database seeded successfully");
    
}

main();