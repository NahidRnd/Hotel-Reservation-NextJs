import { bookItemSchema, insertBookSchema, userInfoSchema, userUpdateSchema } from "@/lib/validators";
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
    price: number;
    capacity: number;
    images: string[];
    hotelId: string;
    hotel: Hotel;
    // bookings    Booking[]
    createdAt: Date;
}