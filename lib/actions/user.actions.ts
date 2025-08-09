'use server';

import { auth, signIn, signOut } from "@/auth";
import { signInFormSchema, signUpFormSchema, userUpdateSchema } from "../validators";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { hashSync } from "bcrypt-ts-edge";
import { prisma } from "@/db/prisma";
import { formatError } from "../utils";
import { UserForm } from "@/types";


// Sign in the user with credentials
export async function signInWithCredentials(prevState: unknown, formData: FormData) {
    try {
      const user = signInFormSchema.parse({
        email: formData.get('email'),
        password: formData.get('password'),
      });
  
      await signIn('credentials', user);
  
      return { success: true, message: 'Signed in successfully' };
    } catch (error) {
      if (isRedirectError(error)) {
        throw error;
      }
  
      return { success: false, message: 'Invalid email or password' };
    }
  }

// Sign the user out
export async function signOutUser() {
  await signOut();
}

// Sign Up the user, Register a new user
export async function signUpUser(prevState: unknown, formData: FormData) {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      confirmPassword: formData.get('confirmPassword'),
      password: formData.get('password'),
    });

    const plainPassword = user.password;

    user.password = hashSync(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });

    await signIn('credentials', {
      email: user.email,
      password: plainPassword,
    });

    return { success: true, message: 'User created successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return {
      success: false,
      message: formatError(error),
    };
  }
}

// Get user by ID
export async function getUserById(userId: string) {
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (!user) throw new Error('User not found');
  return user;
}

// Get User Info
export async function getUserInfo() {

  // Get session and user ID
  const session = await auth();
  const userId = session?.user?.id ? (session.user.id as string) : undefined;

  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (!user) throw new Error('User not found');
  return user;
}

export async function updateUserInfo(data: UserForm) {  
  try {
    const session = await auth();
    const userId = session?.user?.id;
    if (!userId) throw new Error('User not found');

    const currentUser = await prisma.user.findFirst({
      where: { id: userId! },
    });

    if (!currentUser) throw new Error('User not found');

    const user = userUpdateSchema.parse(data);
    
    await prisma.user.update({
      where: { id: currentUser.id },
      data: { ...user },
    });

    return {
      success: true,
      message: 'User updated successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}