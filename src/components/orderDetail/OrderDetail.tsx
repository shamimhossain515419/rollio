import { useGetOrderDetailQuery } from "@/redux/features/orders/ordersApi";
import React from "react";
import OrderProductCard from "./OrderProductCard";
import { SingleOrderInterface } from "@/types/OrderInterface";

const OrderDetail = ({ order_id }: any) => {
  const { data } = useGetOrderDetailQuery(order_id);
  console.log(data);

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
              className={`${data?.order_info?.status ? "bg-green-500" : "bg-red-500"
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
        {data?.data?.map((product: SingleOrderInterface, i: number) => {
          return (
            <OrderProductCard
              key={i}
              product={product}
              order_info={data?.order_info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OrderDetail;
