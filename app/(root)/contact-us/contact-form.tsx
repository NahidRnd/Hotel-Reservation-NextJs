'use client';

import { addContactMessage } from "@/lib/actions/contact.actions";
import { insertContactSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPencilAlt } from "react-icons/fa";
import z from "zod";

const ContactForm = () => {
    const form = useForm<z.infer<typeof insertContactSchema>>({
        resolver: zodResolver(insertContactSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        },
    });
    const [isPending, startTransition] = useTransition();
    console.log(isPending);

    const onSubmit: SubmitHandler<z.infer<typeof insertContactSchema>> = async (
        values
    ) => {
        startTransition(async () => {
            const res = await addContactMessage(values);
            if(!res.success){
                toast(res.message);
                return;
            }
            toast("User Information Updated Successfully")
        })
    }

    return ( 
        <form method="post" onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6 *:bg-[#fcfcfc] *:placeholder:text-[#b3b3b3]">
            <input id="name" {...form.register("name")} type="text" placeholder="Enter Your Name...." required className="border p-3 rounded-sm" />
            {form.formState.errors.name && (<p className="text-red-500">{form.formState.errors.name.message}</p>)}
            <input id="email" type="email" {...form.register("email")} placeholder="Enter Your Email...." required className="border p-3 rounded-sm" />
            {form.formState.errors.email && (<p className="text-red-500">{form.formState.errors.email.message}</p>)}
            <input id="phone" {...form.register("phone")} type="text"  placeholder="Enter Phone Number...." required className="border p-3 rounded-sm" />
            {form.formState.errors.phone && (<p className="text-red-500">{form.formState.errors.phone.message}</p>)}
            <input id="subject" type="text" {...form.register("subject")} placeholder="Enter Subject...." required className="border p-3 rounded-sm" />
            {form.formState.errors.subject && (<p className="text-red-500">{form.formState.errors.subject.message}</p>)}
            <textarea id="message" {...form.register("message")} placeholder="Enter Your Message Here...." required className="border p-3 rounded-sm col-span-2" rows={8}></textarea>
            {/* <input id="message" type="message" {...form.register("message")} required className="border p-3 rounded-sm col-span-2" /> */}
            {form.formState.errors.message && (<p className="text-red-500">{form.formState.errors.message.message}</p>)}
            {isPending ? <button type="submit" disabled className="text-white bg-primary! p-2 rounded-sm max-w-50">Sending Message</button> : 
            <button type="submit" className="text-white bg-primary! p-2 rounded-sm max-w-50">Send Your Message Now</button>}
        </form>
     );
}
 
export default ContactForm;