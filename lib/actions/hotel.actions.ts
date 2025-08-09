'use server';

import { prisma } from "@/db/prisma";
import { Prisma } from "@prisma/client";

// Get All hotels with filter
export async function getHotels({
    destination,
    capacity,
    priceRange,
    amenities,
    startDate,
    endDate,
}:{
    destination: string,
    capacity: number,
    priceRange: string,
    amenities: string[],
    startDate: Date,
    endDate: Date,
}
){
    // City Filter
    const cityFilter: Prisma.HotelWhereInput = 
        destination ? {
            city: {
                name: {
                    contains: destination,
                    mode: 'insensitive',
                } as Prisma.StringFilter,
            },
        }:{}
console.log("ameny", amenities);

const parsedAmenities = typeof amenities === "string" ? JSON.parse(amenities) : amenities;

    const optionFilter = capacity ? {rooms: {some: {capacity:{ gte: Number(capacity)}}}}:{}

    const priceFilter = priceRange ? {rooms: {some: {price: { gte: priceRange.split(",")[0], lte: priceRange.split(",")[1] }}}} : {}

    const serviceFilter = amenities ? {amenities: {some: {id: { in: Object.keys(parsedAmenities) }}}} : {}

    const dateFilter = startDate && endDate ? {rooms: {some: {bookings: {none: {AND: [{startDate:{lt: endDate}}, {endDate:{gt: startDate}}]}}}}} : {}

    const data = await prisma.hotel.findMany({
        where: {
            ...cityFilter,
            ...optionFilter,
            ...priceFilter,
            ...serviceFilter,
            ...dateFilter,
        },
        orderBy: { createdAt: 'desc'},
        include: {
            amenities: true,
            rooms: {
                    orderBy: { price: 'asc' },
                    take: 1,
                    select: { price: true, }
                },
        }
    });

    return data;
}

// Get latest hotels with best price
export async function getBestPriceHotelRoom(){
    const data = await prisma.hotel.findMany({
        take: 3,
        orderBy: { createdAt: 'desc'},
        include: {
            rooms: {
                orderBy: { price: 'asc' },
                take: 1,
                select: { price: true, }
            },
            city: {
                select: { name: true, }
            }
        }
    });

    return data;
}

export async function getBestPriceHotelRoomById(hotelId: string){
    const data = await prisma.hotel.findFirst({
        where: {
            id: hotelId
        },
        include: {
            rooms: {
                orderBy: { price: 'asc' },
                take: 1,
                select: { price: true, }
            },
        }
    });

    return data;
}

export async function getHotelRoomsById(hotelId: string){
    const data = await prisma.hotel.findFirst({
        where: {
            id: hotelId
        },
        include: {
            rooms: true,
            amenities: true,
            city: {
                select: { name: true, }
            }
        }
    });

    return data;
}

export async function getAllServices(){
    const data = await prisma.service.findMany();
    return data;
}

export async function getSimilarHotels(id: string, city: string){
    const data = await prisma.hotel.findMany({
        where: {
            city:{
                name: city,
            },
            NOT: {
                id
            }
        },
        include: {
            city: true,
        },
        take: 3,
    });
    return data;
}

export async function getRoomById(roomId: string){
    const data = await prisma.room.findFirst({
        where: {
            id: roomId
        },
        include: {
            hotel: {
                include: {
                    city: true,
                }
            }
        }
    });

    return data;
}