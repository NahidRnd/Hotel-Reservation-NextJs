'use server';

import { cookies } from 'next/headers';
import { auth } from '@/auth';
import { prisma } from '@/db/prisma';
import { convertToPlainObject, formatError } from '../utils';
import { BookItem } from '@/types';
import { bookItemSchema, insertBookSchema } from '../validators';


// Add item to booking in database
export async function addItemToBook(data: BookItem) {
  try {

    // Check for session book cookie
    const sessionBookId = (await cookies()).get('sessionBookId')?.value;
    if (!sessionBookId) throw new Error('Book Session not found');

    // Get session and user ID
    const session = await auth();
    const userId = session?.user?.id ? (session.user.id as string) : undefined;

    // Get book from database
    const book = await getMyBook();
    console.log("Book in server: ", book);
    
    // Parse and validate submitted item data
    const item = bookItemSchema.parse(data);
    // Find room in database
    const room = await prisma.room.findFirst({
      where: { id: item.roomId },
    });

    if (!room) throw new Error('Room not found');

    // Create new book object
    const newBook = insertBookSchema.parse({
      userId: userId,
      roomId: item.roomId,
      startDate: item.startDate,
      endDate: item.endDate,
      guests: item.guests,
      status: item.status,
      sessionBookId: sessionBookId,
    });
    // Add to database
    const booking = (!book) ? await prisma.booking.create({
        data: newBook,
      }) : await prisma.booking.update({
        where: {id: book.id},
        data: newBook,
      });

    return {
      success: true,
      message: `Booking with ID:${booking?.id} updated successfully`,
    };
  

  } catch (error) {
    return { success: false, message: formatError(error) };
  }
};

//  Get user book info from database
export async function getMyBook() {
  // Check for session book cookie
  const sessionBookId = (await cookies()).get('sessionBookId')?.value;
  if (!sessionBookId) return undefined;
console.log("sessionBookId: ", sessionBookId);

  // Get session and user ID
  const session = await auth();
  const userId = session?.user?.id ? (session.user.id as string) : undefined;

  // Get user book info from database
  const book = await prisma.booking.findFirst({
    where: userId ? { userId: userId } : { sessionBookId: sessionBookId },
    include:{
      user: true,
      room: {
        include: {
          hotel: {
            include: {
              city: true,
            }
          }
        }
      }
    }
  });

  if (!book) return undefined;

  // Convert Decimal values to strings
  return convertToPlainObject({
    ...book,
  });
}