"use client";
import { accountToggle } from "@/redux/features/account/AccountSlice";
import { useGetOrdersQuery } from "@/redux/features/orders/ordersApi";
import { SiteModalToggle } from "@/redux/features/sitemodal/SiteModalSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const OrderCard = ({ order }: any) => {
  const dispatch = useDispatch();

  return (
    <Link
      onClick={() => {
        dispatch(SiteModalToggle()), dispatch(accountToggle());
      }}
      href={`/account/order/${order?.order_primary_id}`}
      className="border p-2 flex justify-between items-center text-[14px] rounded my-2"
    >
      <p># {order?.order_invoice}</p>
      <div>
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
      <p>
        <span className="text-slate-500">Qty:</span>
        <span> {order?.total_quantity}</span>
      </p>
      <p className="">
        <span
          className={`${
            order?.status ? "bg-green-500" : "bg-red-500"
          } text-white px-1 rounded-md`}
        >
          {order?.status ? "approved" : "Pending"}
        </span>
      </p>
    </Link>
  );
};

export default OrderCard;
