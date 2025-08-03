'use client';

import { signInWithCredentials } from "@/lib/actions/user.actions";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const CredentialsSignInForm = () => {
    const [data, action] = useActionState(signInWithCredentials, {
        success: false,
        message: ''
    });

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    const SignInBtn = () => {
        const { pending } = useFormStatus();
        return (
            <button disabled={pending} className="w-full text-white bg-secondary rounded-sm">
                { pending ? 'Signing In...' : 'Sign In' }
            </button>
        )
    }

    return ( 
        <form action={action} className="auth-form">
            <input type="hidden" name="callbackUrl" value={callbackUrl} />
            <div className="space-y-3">
                { data && !data.success && (
                    <div className="text-center text-red-600">
                        {data.message}
                    </div>
                )}
                <div className="flex flex-col justify-between">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="flex flex-col justify-between">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" required autoComplete="password" />
                </div>
                <div>
                    <SignInBtn />
                </div>
                <div className="text-sm text-center">
                    Don&apos;t have an account ? <Link href='/signup' target="self">Sign Up</Link>
                </div>
            </div>        
        </form>
     );
}
 
export default CredentialsSignInForm;