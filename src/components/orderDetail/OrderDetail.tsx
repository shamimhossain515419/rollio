import { useGetOrderDetailQuery } from "@/redux/features/orders/ordersApi";
import Image from "next/image";
import React from "react";

const OrderDetail = ({ order_id }: any) => {
  const { data } = useGetOrderDetailQuery(order_id);

  return (
    <div className="max-w-[1000px] mx-auto bg-white bg-opacity-50  my-5 rounded-xl h-screen min-h-full ">
      <div className="flex items-center justify-between md:text-sm text-[12px]  border-b grid-cols-3 border-stone-200 p-5">
        <div className="">
          <h1>Order# {data?.order_info?.order_invoice}</h1>

          {/* <p className="text-sm ">Placed on 18 May 2022 18:37:34</p> */}
        </div>
        <div className="">
          <h1>
            Status:{" "}
            <span
              className={`${
                data?.order_info?.status ? "bg-green-500" : "bg-red-500"
              } text-white px-1 rounded-md`}
            >
              {data?.order_info?.status ? "approved" : "Pending"}
            </span>
          </h1>
        </div>
        <div className="">Total: ৳ {data?.order_info?.total_amount}</div>
      </div>
      <div className=" items-center justify-between md:text-sm text-[12px]  border-b grid-cols-3 border-stone-200 shadow p-5">
        <div className="">
          <h1>Total Quantity {data?.order_info?.total_quantity}</h1>
        </div>
        <div className="">
          <h1>
            Address
            <p>
              {data?.order_info?.address},{data?.order_info?.zip_code},{" "}
              {data?.order_info?.city},{data?.order_info?.state},{" "}
              {data?.order_info?.country},{" "}
            </p>
          </h1>
        </div>
      </div>

      {/* products */}

      <div className="">
        {data?.data?.map((product: any, i: number) => (
          <div
            key={i}
            className="text-sm p-2 flex justify-between items-center shadow-sm"
          >
            <div className="">{product?.product_name}</div>
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
            <div className="">Qty: {product?.quantity}</div>
            <div className="">Price: {product?.unit_price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetail;
