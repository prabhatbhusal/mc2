'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";

// Zod schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  contact: z
    .string()
    .regex(/^\d+$/, "Contact must be a valid number")
    .min(7, "Contact is too short")
    .max(15, "Contact is too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    // handle submission
  };

  return (
    <main>
      <div className="min-h-screen bg-cover bg-center relative py-16 px-4 md:px-12 lg:px-16 flex flex-col justify-end items-center lg:items-end font-medium gap-6 lg:gap-10">
        <div className="bg-[#141414] flex flex-col w-full max-w-xl lg:max-w-3xl xl:max-w-4xl py-10 px-6 md:py-12 md:px-10 lg:py-16 lg:px-12 gap-8">
          <div className="flex flex-col gap-4 justify-center items-center text-white">
            <p>Your journey matters</p>
            <hr className="w-12" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center">
              <span className="text-primary">Let us </span> know how we can{" "}
              <span className="text-primary">help.</span>
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col border-none text-neutral-500 justify-center gap-8"
          >
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="px-4 py-3 w-full bg-transparent"
              />
              <hr className="w-full" />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="contact">Contact</label>
              <input
                id="contact"
                type="text"
                {...register("contact")}
                className="px-4 py-3 w-full bg-transparent"
              />
              <hr className="w-full" />
              {errors.contact && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contact.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="px-4 py-3 w-full bg-transparent"
              />
              <hr className="w-full" />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                {...register("message")}
                className="px-4 py-3 w-full bg-transparent resize-none"
                rows={4}
              />
              <hr className="w-full" />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <div className="flex justify-end">
              <Button
                size="lg"
                type="submit"
                className="relative bg-primary text-white items-center flex font-semibold gap-2 p-2 sm:p-3"
              >
                <h6 className="font-semibold text-base md:text-lg">
                  Send Message
                </h6>
                <span className="h-10 w-5 bg-primary absolute top-0 right-0 hidden md:block"></span>
                <span className="h-6 w-6 bg-primary rotate-45 absolute top-6 right-0 translate-x-3 hidden md:block"></span>
              </Button>
            </div>
          </form>
        </div>
        <div className="text-neutral-500 text-center lg:text-right text-sm md:text-base mt-4 lg:mt-6 w-full px-4">
          1802 STANDRIDGE ST, KILLEEN, TX 76543, USA
        </div>
      </div>
    </main>
  );
};

export default Page;
