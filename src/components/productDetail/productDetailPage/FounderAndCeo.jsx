"use client";
import { useGetFounderAndCeoQuery } from "@/redux/features/subscriber/subscriberApi";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const FounderAndCeo = () => {
  const { data } = useGetFounderAndCeoQuery();
  return (
    <>
      <div className="grid md:grid-cols-2 text-white md:gap-12 items-center px-4">
        <div className="">
          <h1 className="text-[48px] ">{data?.data?.name}</h1>
          <h2 className="text-xl">{data?.data?.title}</h2>
          <p className="text-xl py-5">{data?.data?.description}</p>
        </div>
        <div className="">
          <Image
            className="border-[10px] rounded-3xl "
            src={`${process.env.BASE_URL}/images/${data?.data?.photo}`}
            width={500}
            height={500}
            lang="responsive"
            alt=""
          />
        </div>
      </div>
      {/* marquee */}
      <Marquee>
        <span className=" xl:text-[200px] md:text-[100px] text-[25px] flex gap-3 text-white">
          <span className="">{data?.data?.marquee_title}</span>

        </span>
      </Marquee>

      <p className="text-[240px] "></p>
    </>
  );
};

export default FounderAndCeo;
