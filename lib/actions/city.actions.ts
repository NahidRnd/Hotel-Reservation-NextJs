'use server';

import { prisma } from "@/db/prisma";

export async function getCityById(id: string){
    const data = await prisma.city.findFirst({
        where: {
            id
        }
    });

    return data;
}


