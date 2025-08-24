"use client";

import { User } from "@/types";
import { FaPencilAlt } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { userUpdateSchema } from "@/lib/validators";
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from "react";
import toast from "react-hot-toast";
import { updateUserInfo } from "@/lib/actions/user.actions";

const BookingUserInfo = ({user} : {user: User}) => {
    const form = useForm<z.infer<typeof userUpdateSchema>>({
        resolver: zodResolver(userUpdateSchema),
        defaultValues: {
            name: user.name,
            phone: user.phone ?? "",
        },
    });

    const [isPending, startTransition] = useTransition();
    console.log(isPending);
    

    const onSubmit: SubmitHandler<z.infer<typeof userUpdateSchema>> = async (
        values
    ) => {
        startTransition(async () => {
            
            const res = await updateUserInfo(values);

            if(!res.success){
                toast(res.message);
                return;
            }

            toast("User Information Updated Successfully")
        })
    }

    return ( 
        <div className="border mt-10 p-6 rounded-md">
            <h3 className="text-2xl font-bold text-ash mb-4">User Info</h3>
            <form method="post" onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-2 grid-cols-1 gap-6">
                <input id="name" {...form.register("name")} type="text" required className="border p-3 rounded-sm" />
                {form.formState.errors.name && (<p className="text-red-500">{form.formState.errors.name.message}</p>)}
                <input id="email" type="email" value={user.email} disabled required className="border p-3 rounded-sm" />
                <input id="phone" {...form.register("phone")} type="text"  placeholder="Enter Phone Number...." required className="border p-3 rounded-sm" />
                {form.formState.errors.phone && (<p className="text-red-500">{form.formState.errors.phone.message}</p>)}
                <button type="submit" className="flex items-center gap-2 border text-secondary p-2 rounded-sm hover:bg-gray-200"><FaPencilAlt /> Update User Information</button>
            </form>
        </div>
     );
}
 
export default BookingUserInfo;