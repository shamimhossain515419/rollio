"use client"

import { useCreateSubscriberMutation } from "@/redux/features/subscriber/subscriberApi";
import toast from "react-hot-toast";

const FooterStayTouch = ({websiteInfo}:any) => {
    
    const [createSubscriber, { isLoading }] = useCreateSubscriberMutation();

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const form = e.currentTarget; // Reference the form element directly
        const formData = new FormData(form);
        const email = formData.get("email") as string;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          toast.error("Please enter a valid email address.");
          return;
        }
        const newData = {
          email,
          group_id: process.env.GROUP_ID, // Ensure this environment variable is set correctly
        };
        const result = await createSubscriber(newData).unwrap();
        if (result?.status==true) {
          toast.success(result?.message);
          form.reset(); // Reset the form using the referenced form element
        } else {
          toast.error(result?.message);
        }
      } catch (error: any) {
        toast.error(error.message || "An error occurred while subscribing.");
      }
    };
  return (
    <div>
    {/* footer headnig  */}
    <h1 className=" text-[20px] text-center    md:text-start  text-white  md:text-[55px] text-secondary font-bold  ">
      Let’s stay in touch.
    </h1>
    <form  onSubmit={handleSubscribe} className=" relative  flex items-center max-w-[600px]  py-2">
      <input
        className=" outline-0  relative border border-white md:pr-[200px] xl:pr-[257px] py-2 xl:py-5 bg-transparent text-white placeholder:text-white rounded-[50px] px-5 placeholder: text-[18px] lx:text-[22px] w-full"
        type="email"
        name="email"
        id=""
        placeholder="Enter Email..."
      />
      <button disabled={isLoading}  className="  hover:bg-[#ffffffda] duration-300 bg-white flex justify-center items-center   right-0  md:max-w-[200px]   absolute  text-[#020202e1]   text-[14px] cursor-pointer  md:text-[20px]  px-5  py-2 xl:py-5 rounded-[50px]">
        Join{" "}
        <span className=" hidden md:block pl-1">
          {" "}
          {websiteInfo?.group_name}
        </span>
      </button>
    </form>
  </div>
  )
}

export default FooterStayTouch
