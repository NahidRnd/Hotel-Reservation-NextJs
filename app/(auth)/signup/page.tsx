import { auth } from "@/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import SignUpForm from "./sign-up-form";
import { MdVerifiedUser } from "react-icons/md";


export const metadata: Metadata = {
    title: 'Sign Up',
}

const SignUpPage = async (props: {searchParams: Promise<{callbackUrl: string}>}) => {
    const {callbackUrl} = await props.searchParams;
        const session = await auth();
        if(session) {
          return redirect(callbackUrl || '/');
        }
    return ( 
    <div className='w-full sm:max-w-md m-auto box backdrop-blur-lg border-[#dec5e2] shadow-xl p-14'>
        <div className='space-y-2'>
          <Link href='/' className='flex justify-center items-center'>
                <MdVerifiedUser className="text-4xl m-auto mb-2" />
          </Link>
          <div className='text-center text-xl font-bold'>Create Account</div>
          <div className='text-center'>
            Enter your information below to sign up
          </div>
        </div>
        <div className='space-y-4'>
            <SignUpForm />
        </div>
    </div>
    );
}
 
export default SignUpPage;