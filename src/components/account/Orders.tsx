"use client";
import { useSession } from "next-auth/react";
import AccountLoginForm from "./accountLoginForm";
import OrderCard from "./OrderCard";
import { useGetOrdersQuery } from "@/redux/features/orders/ordersApi";
import { OrderDetailsInterface } from "@/types/OrderDetailsInterface";
const Orders = () => {
  const { data: sesstion } = useSession();
  const { data } = useGetOrdersQuery("");
  console.log(data);

  //
  return (
    <div>
      {/* account from login page  */}
      {!sesstion?.user && <AccountLoginForm></AccountLoginForm>}
      {/* order cart   */}

      {sesstion?.user && !data?.data?.length && (
        <div className=" flex justify-center min-h-[20vh] items-center gap-2">
          <div>
            <h1 className="text-[16px]  text-center  md:text-[25px] font-semibold text-black ">
              No orders yet
            </h1>
            <p className="text-[14px]  text-center  md:text-[17px] text-gray-800 ">
              Your order history and shipments will appear here.
            </p>
          </div>
        </div>
      )}

      {/* order card */}

      {data?.data?.map((order: OrderDetailsInterface) => (
        <OrderCard key={order.order_primary_id} order={order} />
      ))}
    </div>
  );
};

export default Orders;
