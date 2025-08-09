import { z } from "zod";

// Booking
export const bookItemSchema = z.object({
  roomId: z.string().min(1, 'Room is required'),
//   userId: z.string().min(1, 'User is required'),
  startDate: z.preprocess((val) => new Date(val as string), z.date('Start Date is required')),
  endDate: z.preprocess((val) => new Date(val as string), z.date('End Date is required')),
  guests: z.number().nonnegative('Guests must be a positive number'),
  status: z.string().min(1, 'Status is required'),
});

// Schema for insert Booking info
export const insertBookSchema = bookItemSchema.extend({
    // items: z.array(bookItemSchema),
    userId: z.string().min(1, 'User is required'),
    sessionBookId: z.string().min(1, 'Session book id is required'),
    // name: z.string().min(3, 'Name must be at least 3 characters'),
    // email: z.string().min(3, 'Email is required'),
    // phone: z.string().min(9, 'phone number must be at least 9 characters').max(11, 'Phone number must be at most 11'),
});

export const signInFormSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const signUpFormSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm password must be at least 6 characters'),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});

export const userInfoSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    email: z.string().min(3, 'Email is required'),
});

export const userUpdateSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    phone: z.string().min(9, 'phone number must be at least 9 characters').max(11, 'Phone number must be at most 11'),
});
