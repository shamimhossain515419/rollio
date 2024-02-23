"use client";
import ContactPage from "@/components/page/faq/ContactPage";
import FaqQuestions from "@/components/page/faq/FaqQuestions";
import { faqData } from "@/utility/faqdata";
import React, { useState } from "react";

const Page = () => {
  const [activeFaq, setActiveFAQ] = useState<any>([
    {
      id: 1,
      name: "How can I return my order?",
      description:
        "Returns are free in Aus! To initiate your domestic return, select a return option below:",
    },
    {
      id: 2,
      name: "How can I return my order?",
      description:
        "Returns are free in Aus! To initiate your domestic return, select a return option below:",
    },
    {
      id: 3,
      name: "What is your returns policy?",
      description:
        "You can find more information about our returns policy here \n  For information about returns on pre-orders, please see the Pre-orders section in these FAQs.",
    },
  ]);

  return (
    <div>
      <div className="-mt-64 min-h-[120vh] bg-cover  bg-center bg-[url('https://www.rollienation.com/cdn/shop/files/faq_2000x.jpg?v=1657601490')]">
        <div className="container mx-auto pt-72 lg:pb-10">
          <div className=" w-full">
            <h1 className="text-[100px] text-center  lg:text-start  font-extrabold py-6 my-6 text-white">
              FAQ
            </h1>
            <div className=" grid  lg:grid-cols-3 gap-6  lg:gap-10">
              <div className=" lg:col-span-1">
                <div className=" grid grid-cols-2 gap-4   lg:gap-10   lg:grid-cols-1">
                  {faqData?.map((item: any, index: number) => (
                    <div
                      onClick={() => setActiveFAQ(item?.faqQuestion)}
                      className={`  hover:bg-[#fff] hover:text-[#000]  py-5 lg:py-12 px-5 text-white  cursor-pointer bg-[#ffffff29] shadow-[10px] rounded-[15px] lg:rounded-[30px]`}
                      key={index}
                    >
                      <div className="text-center">
                        <h1 className="text-[20px]  md:text-[40px] ">
                          {" "}
                          {item?.name}{" "}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" lg:col-span-2 ">
                <div className=" bg-white p-7  lg:py-20 md:px-16 lg:rounded-[40px] ">
                  {activeFaq?.map((item: any, index: number) => (
                    <FaqQuestions key={index} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
        <ContactPage
          title="Haven’t answered your question?"
          button_text="Contact Us"
          link="/page/contact"
        />
      </div>
    </div>
  );
};

export default Page;
