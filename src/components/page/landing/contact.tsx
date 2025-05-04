'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";

// Define Zod schema for form validation
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

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Data:", data);
    // handle form submission (e.g., API call)
  };

  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center lg:flex-row gap-10">
          <div className="w-full lg:w-1/2 h-full">
            <video
              autoPlay
              muted
              loop

              className="h-full w-full"
            >
              <source src="/video/video2.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="text-white w-full lg:w-1/2">
            <div className="flex flex-col gap-2 mb-6">
              <h3 className="text-base">Contact Us</h3>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-orbitron hover:text-gray-300 transition duration-300">
                Get <span className="text-red-600 hover:text-red-400">Help</span>{" "}
                Now
              </h2>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 md:gap-10 text-neutral-600"
            >
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full">
                <div className="flex flex-col w-full">
                  <label className="mb-1">Name</label>
                  <input
                    type="text"
                    {...register("name")}
                    className="border-none bg-transparent"
                  />
                  <hr className="text-neutral-700 w-full" />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-1">Contact</label>
                  <input
                    type="text"
                    {...register("contact")}
                    className="bg-transparent"
                  />
                  <hr className="text-neutral-700 w-full" />
                  {errors.contact && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contact.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-6 md:gap-10">
                <div className="w-full">
                  <label className="mb-1">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full bg-transparent"
                  />
                  <hr className="text-neutral-700 w-full" />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label className="mb-1">Message</label>
                  <textarea
                    {...register("message")}
                    className="w-full bg-transparent resize-none"
                    rows={4}
                  />
                  <hr className="text-neutral-700 w-full" />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-2">
                <Button
                  variant="clip_primary"
                  type="submit"
                  className="text-white"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
