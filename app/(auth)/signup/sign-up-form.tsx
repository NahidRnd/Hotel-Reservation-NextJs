'use client';

import { signUpUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const SignUpForm = () => {
    const [data, action] = useActionState(signUpUser, {
        success: false,
        message: ''
    });

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    const SignUpBtn = () => {
        const { pending } = useFormStatus();
        return (
            <button disabled={pending} className="w-full text-white bg-secondary rounded-sm">
                { pending ? 'Submitting...' : 'Sign Up' }
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
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" required autoComplete="name" />
                </div>
                <div className="flex flex-col justify-between">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="flex flex-col justify-between">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" required autoComplete="password" />
                </div>
                <div className="flex flex-col justify-between">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input id="confirmPassword" name="confirmPassword" type="password" required autoComplete="confirmPassword" />
                </div>
                <div>
                    <SignUpBtn />
                </div>
                <div className="text-sm text-center">
                    Already have an account ? <Link href='/signin' target="self">Sign In</Link>
                </div>
            </div>        
        </form>
     );
}
 
export default SignUpForm;