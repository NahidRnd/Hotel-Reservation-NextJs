import { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CredentialsSignInForm from "./credentials-signin-form";
import { MdLogin } from "react-icons/md";

export const metadata: Metadata = {
    title: 'Sign In',
}

const SignInPage = async (props: {searchParams: Promise<{callbackUrl: string}>}) => {
    const {callbackUrl} = await props.searchParams;
    const session = await auth();
    if(session) {
      return redirect(callbackUrl || '/');
    }
    return ( 
    <div className='w-full sm:max-w-md m-auto box backdrop-blur-lg border-[#dec5e2] shadow-xl p-14'>
      <div className='space-y-4'>
        <MdLogin className="text-4xl m-auto mb-2" />
        <div className='text-center text-xl font-bold'>Sign In</div>
        <p className='text-center'>
          Select a method to sign in to your account
        </p>
      </div>
      <div className='space-y-4'>
          <CredentialsSignInForm />
      </div>
    </div>
     );
}
 
export default SignInPage;