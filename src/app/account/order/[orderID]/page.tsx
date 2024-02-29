import Image from "next/image";
import React from "react";

const page = ({ params }: any) => {
  return (
    <div className="max-w-[1000px] mx-auto bg-white bg-opacity-50  my-5 rounded-xl h-screen min-h-full ">
      <div className="flex items-center justify-between md:text-sm text-[12px]  border-b grid-cols-3 border-stone-200 shadow p-5">
        <div className="">
          <h1>Order #{params.orderID}</h1>

          <p className="text-sm ">Placed on 18 May 2022 18:37:34</p>
        </div>
        <div className="">
          <h1>Status: Pending</h1>
        </div>
        <div className="">Total: ৳ 204</div>
      </div>

      <div className="">
        {/*  */}
        <div className="text-sm p-2 flex justify-between items-center shadow-sm">
          <div className="">Product 2</div>
          <div className="">
            <Image
              className="rounded-full border"
              src={
                "https://www.rollienation.com/cdn/shop/files/PS00022_PaceCrystal_H_1200x.jpg?v=1707821120"
              }
              width={50}
              height={50}
              alt=""
            />
          </div>
          <div className="">Qty: 10</div>
          <div className="">Price: 10</div>
        </div>
      </div>
    </div>
  );
};

export default page;
