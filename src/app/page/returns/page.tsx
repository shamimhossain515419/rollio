import ReturnsAccordion from "@/components/page/returns/ReturnsAccordion";
import { returnsData } from "@/utility/returnsdata";
import React from "react";

const page = () => {
  return <div className=" max-w-[900px] mx-auto px-4 ">

    <div className=" py-20">
      <h1 className="text-[100px] text-center  lg:text-start  font-extrabold py-7 my-6 text-white">Returns are easy</h1>
      <div className=" bg-white p-7  lg:py-20 md:px-16 lg:rounded-[40px]">
        <div>
          {
            returnsData?.map((item: any, index: number) => <ReturnsAccordion key={index} item={item} />)
          }
        </div>
      </div>
    </div>
  </div>;
};

export default page;
