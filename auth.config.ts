import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';

export const authConfig = {
  providers: [],
  callbacks: {
    authorized({ request, auth }: any) {
          // Array of regex patterns of protected paths
          const protectedPaths = [
            /\/profile/,
            /\/user\/(.*)/,
            /\/booking\/(.*)/,
            /\/admin/,
          ];

          // Get pathname from the req URL object
          const { pathname } = request.nextUrl; //request.nextUrl.pathname

          // Check if user is not authenticated and on a protected path
          if (!auth && protectedPaths.some((p) => p.test(pathname))) return false;

          // Check for cart cookie
          if (!request.cookies.get('sessionBookId')) {
            // Generate cart cookie
            const sessionBookId = crypto.randomUUID(); 

            // Clone the request headers
            const newRequestHeaders = new Headers(request.headers); 

            // Create a new response and add the new headers
            const response = NextResponse.next({
              request: {
                headers: newRequestHeaders,
              },
            });

            // Set the newly generated sessionCartId in the response cookies
            response.cookies.set('sessionBookId', sessionBookId);

            // Return the response with the sessionCartId set
            return response;
          } else {
            return true;
          }
        },
  }
} satisfies NextAuthConfig;