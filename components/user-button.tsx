import { auth } from "@/auth";
import { signOutUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const UserButton = async ({style, text}: {style: string, text: string} ) => {
    const session = await auth();
    if(!session) {
        return (
            <Link href='/signin' className={style}><FaUser /> {text}</Link>
        )
    }
    const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? 'U';

    return ( 
        <div className='flex gap-2 items-center'>
            <div>
                <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>
                        {session.user?.name}
                    </p>
                    <p className='text-xs leading-none text-gray-500'>
                        {session.user?.email}
                    </p>
                    <Link href='/user/profile' className='text-sm font-medium leading-none mt-2'>
                        User Profile
                    </Link>
                    <Link href='/user/orders' className='text-sm font-medium leading-none mt-2'>
                        Order History
                    </Link>
                    {/* {session?.user?.role === 'admin' && (
                        <Link className='text-sm font-medium leading-none mt-2' href='/admin/overview'>
                            Admin
                        </Link>
                    )} */}
                </div>
                <div>
                    <form action={signOutUser} method="post" className='w-full'>
                        <button className='w-full py-3 mt-3 h-4 justify-start px-0'>
                            Sign Out
                        </button>
                    </form>
                </div> 
            </div>
        </div>
     );
}
 
export default UserButton;