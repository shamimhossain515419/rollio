import React from "react";

const page = ({ params }: any) => {
  return (
    <div className="max-w-[1000px] mx-auto bg-white bg-opacity-50  my-5 rounded-xl h-screen ">
      <div className="flex items-center justify-between  border-b grid-cols-3 border-stone-200 shadow-xl p-5">
        <div className="">
          <h1>Order #{params.orderID}</h1>

          <p className="text-sm ">Placed on 18 May 2022 18:37:34</p>
        </div>
        <div className="">
          <h1>Status: Pending</h1>
        </div>
        <div className="">Total: ৳ 204</div>
      </div>
    </div>
  );
};

export default page;
