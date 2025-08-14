import { bookItemSchema, insertBookSchema, insertContactSchema, userInfoSchema, userUpdateSchema } from "@/lib/validators";
import { Decimal } from "@prisma/client/runtime/library";
import z from "zod";

export type BookItem = z.infer<typeof bookItemSchema>;
export type User = z.infer<typeof userInfoSchema> & {
    phone?: string | null;
    image?: string | null;
    id: string;
    createdAt: Date;
    password: string;
    role: string;
};
export type Book = z.infer<typeof insertBookSchema>;
export type UserForm = z.infer<typeof userUpdateSchema>;
export type ContactForm = z.infer<typeof insertContactSchema>;
export type Hotel = {
    id: string;
    name: string;
    city: {
        name: string;
    }
}
export type Room = {
    id: string;
    name: string;
    type: string;
    price: Decimal;
    capacity: number;
    images: string[];
    hotelId: string;
    // hotel: Hotel;
    // bookings    Booking[]
    createdAt: Date;
}

export type RoomHotel = Room & {
    hotel: Hotel;
}

export type DateRange = {
    startDate: string;
    endDate: string;
}

export type Services = {
    id: string;
    name: string;
    icon: string;
}

export type HotelRoom = {
    city: { name: string; };
    amenities: Services[];
    rooms: Room[];
}

export type HotelMin = {
    id: string;
    coverImage: string;
    description: string;
    name: string;
    rating: number;
    gallery: string[];
    cityId: string;
    createdAt: Date;
} 

export type HotelRoomCity = Room &{
    price: Decimal;
    hotel: HotelMin &{city: {
            id: string;
            name: string;
            description: string;
            images: string[];
        }};
}

export type HotelFull = HotelMin & {
    amenities: Services[];
    rooms: {
        price: Decimal;
    }[];
}

export type HotelCity = HotelMin & {
    city: {
        name: string;
    };
    rooms: {
        price: Decimal;
    }[];
}