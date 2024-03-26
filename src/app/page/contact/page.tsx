import ContactPage from "@/components/page/faq/ContactPage";
import Button from "@/components/utilityComponent/button/Button";
import React from "react";
import Marquee from "react-fast-marquee";

const page = () => {
  return (
    <div className="bg-cover -mt-28 bg-center min-h-[130vh] bg-[url('https://www.rollienation.com/cdn/shop/files/contact-desktop_0e38e055-c423-40d9-b12e-c9e0fdc665c2_2000x.jpg?v=1655178533')]">
      <div className="container mx-auto pt-28 flex  justify-center">
        <form className="w-[830px] block max-w-full my-10 bg-white rounded-3xl p-5 ">
          <h1 className="md:text-7xl text-lg text-center font-semibold pb-5">
            Contact
          </h1>
          <div className="">
            <select
              className="border w-full rounded-3xl p-4 appearance-none"
              name="type"
              id=""
            >
              <option value="">General Enquiry</option>
              <option value="">Delivery</option>
              <option value="">Product</option>
            </select>
          </div>
          <div className="mt-5">
            <input
              className="border w-full rounded-3xl p-3"
              type="text"
              name="name"
              id=""
              placeholder="Name*"
            />
          </div>
          <div className="mt-5">
            <input
              className="border w-full rounded-3xl p-3"
              type="text"
              name="email"
              id=""
              placeholder="email*"
            />
          </div>
          <div className="mt-5">
            <input
              className="border w-full rounded-3xl p-3"
              type="text"
              name="phoneNumber"
              id=""
              placeholder="phone Number"
            />
          </div>
          <div className="mt-5">
            <textarea
              placeholder="Message"
              className="border w-full h-[140px] rounded-3xl p-3 duration-300"
            />
          </div>
          <div className="mt-5 flex justify-center">
            <Button title="Submit enquiry" />
          </div>
        </form>
      </div>
      <div className="">
        <Marquee speed={150}>
          <div className="flex gap-4 xl:text-[230px] lg:text-[100px]  md:text-[70px] text-5xl font-bold text-white">
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

export default page;
