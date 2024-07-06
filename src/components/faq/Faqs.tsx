"use client";
import { useState } from "react";
import FaqQuestions from "../page/faq/FaqQuestions";
import ContactPage from "../page/faq/ContactPage";
import { useGetFaqsQuery } from "@/redux/features/api/faq/singleFaq";
import Link from "next/link";

const Faqs = ({ faqs, feqName }: any) => {
  const [activeFaq, setActiveFAQ] = useState<number>(faqs[0]?.id);
  const { data, error } = useGetFaqsQuery(activeFaq);

  return (
    <div>
      <div className="-mt-64 min-h-[120vh] bg-cover  bg-center bg-[url('https://www.rollienation.com/cdn/shop/files/faq_2000x.jpg?v=1657601490')]">
        <div className="container mx-auto pt-72 lg:pb-10">
          <div className=" w-full">
            <div className=" grid  lg:grid-cols-3 gap-6  lg:gap-10">
              <div className=" lg:col-span-1">
                <div className=" grid grid-cols-2 gap-4   lg:gap-10   lg:grid-cols-1">
                  {faqs?.map((item: any, index: number) => (
                    <Link
                      href={`/pages/${item?.name}`}
                      onClick={() => setActiveFAQ(item?.id)}
                      className={`  ${
                        feqName == item?.name
                          ? " bg-[#fff]  text-black"
                          : "  bg-[#ffffff29]  text-white "
                      } hover:bg-[#fff] hover:text-[#000]  py-5 lg:py-12 px-5  cursor-pointer shadow-[10px] rounded-[15px] lg:rounded-[30px]`}
                      key={index}
                    >
                      <div className="text-center">
                        <h1 className="text-[20px]  md:text-[40px] ">
                          {item?.name}
                        </h1>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className=" lg:col-span-2 ">
                <div className=" bg-white p-7  lg:py-20 md:px-16 lg:rounded-[40px] ">
                  <div>
                    <h1 className="text-[18px] md:text-[35px] font-semibold uppercase">
                      {" "}
                      {feqName}{" "}
                    </h1>
                  </div>
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
          link="/pages/contact"
        />
      </div>
    </div>
  );
};

export default Faqs;
