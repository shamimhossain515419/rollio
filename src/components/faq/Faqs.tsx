"use client";

import { faqData } from "@/utility/faqdata";
import { useState } from "react";
import FaqQuestions from "../page/faq/FaqQuestions";
import ContactPage from "../page/faq/ContactPage";
import { useGetFaqsQuery } from "@/redux/features/api/faq/singleFaq";

const Faqs = ({ faqs }: any) => {
  const [activeFaq, setActiveFAQ] = useState<number>(faqs[0]?.faq_id);
  const { data } = useGetFaqsQuery(activeFaq);
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
                  {faqs?.map((item: any, index: number) => (
                    <div
                      onClick={() => setActiveFAQ(item?.faq_id)}
                      className={`  hover:bg-[#fff] hover:text-[#000]  py-5 lg:py-12 px-5 text-white  cursor-pointer bg-[#ffffff29] shadow-[10px] rounded-[15px] lg:rounded-[30px]`}
                      key={index}
                    >
                      <div className="text-center">
                        <h1 className="text-[20px]  md:text-[40px] ">
                          {item?.name}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" lg:col-span-2 ">
                <div className=" bg-white p-7  lg:py-20 md:px-16 lg:rounded-[40px] ">
                  {data?.accordions?.map((item: any, index: number) => (
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

export default Faqs;
