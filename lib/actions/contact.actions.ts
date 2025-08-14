'use server'

import { ContactForm } from "@/types";
import { formatError } from "../utils";
import { insertContactSchema } from "../validators";
import { prisma } from "@/db/prisma";

export async function addContactMessage(data: ContactForm) {
    try {    
        const contact = insertContactSchema.parse(data);
        
        await prisma.contactMesseages.create({
          data: contact,
        });
    
        return {
          success: true,
          message: 'Message Sent successfully',
        };
      } catch (error) {
        return { success: false, message: formatError(error) };
    }
}