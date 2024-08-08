"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import ContactPage from "../page/faq/ContactPage";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useContactMessageMutation } from "@/redux/features/contact/contactApi";

type FormData = {
  type: string;
  name: string;
  email: string;
  mobile: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [contactMessage, { data: result, isLoading, isSuccess }] =
    useContactMessageMutation();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await contactMessage(data).unwrap();
      if (res?.status === "success") {
        toast.success("Message sent successfully");
        reset(); // Reset the form after successful submission
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-cover -mt-28 bg-center min-h-[130vh] bg-[url('https://www.rollienation.com/cdn/shop/files/contact-desktop_0e38e055-c423-40d9-b12e-c9e0fdc665c2_2000x.jpg?v=1655178533')]">
      <div className="container mx-auto pt-28 flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[830px] block max-w-full my-10 bg-white rounded-3xl p-5"
        >
          <h1 className="md:text-7xl text-lg text-center font-semibold pb-5">
            Contact
          </h1>
          <div>
            <select
              className="border w-full rounded-3xl p-4 appearance-none"
              {...register("type", {
                required: "Please select an enquiry type.",
              })}
            >
              <option value="">Select Enquiry Type</option>
              <option value="General Enquiry">General Enquiry</option>
              <option value="Delivery">Delivery</option>
              <option value="Product">Product</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-sm">{errors.type.message}</p>
            )}
          </div>
          <div className="mt-5">
            <input
              className="border w-full rounded-3xl p-3"
              type="text"
              placeholder="Name*"
              {...register("name", { required: "Name is required." })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="mt-5">
            <input
              className="border w-full rounded-3xl p-3"
              type="text"
              placeholder="Email*"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email is invalid.",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="mt-5">
            <input
              className="border w-full rounded-3xl p-3"
              type="text"
              placeholder="Phone Number"
              {...register("mobile", {
                pattern: {
                  value: /^\d{10,15}$/,
                  message: "Phone number is invalid.",
                },
              })}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile.message}</p>
            )}
          </div>
          <div className="mt-5">
            <textarea
              placeholder="Message"
              className="border w-full h-[140px] rounded-3xl p-3 duration-300"
              {...register("message", { required: "Message is required." })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <div className="mt-5 flex justify-center">
            <button
              className="bg-[#15151f] hover:bg-[#383849] text-white rounded-full px-8 py-4 duration-300 ease-in"
              type="submit"
            >
              {isLoading ? "Loading..." : "Submit enquiry"}
            </button>
          </div>
        </form>
      </div>
      <div className="">
        <Marquee speed={150}>
          <div className="flex gap-4 xl:text-[230px] lg:text-[100px] md:text-[70px] text-5xl font-bold text-white">
            <span>Give us a ring on 1800 ROLLIE</span>
            <span>Give us a ring on 1800 ROLLIE</span>
          </div>
        </Marquee>
      </div>
      <ContactPage
        title="Find the answer you’re looking for"
        button_text="View FAQs "
        link=""
      />
    </div>
  );
};

export default Contact;
