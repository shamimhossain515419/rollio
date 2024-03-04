"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../utilityComponent/button/Button";
import { Collapse } from "react-collapse";

const OrderProductCard = ({ product, order_info }: any) => {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");
  const [photo, setPhoto] = useState("");

  const returnHandler = () => {
    alert(note);
  };

  return (
    <div className="">
      <div className="text-sm p-2 flex justify-between items-center shadow-sm">
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
        <div onClick={() => setOpen(!open)} className="cursor-pointer">
          Return
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="p-4">
          <div>
            <div>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Note"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <input
                  onChange={(e: any) => setPhoto(e.target.files[0])}
                  type="file"
                  className="block w-full mt-2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <button
                onClick={() => returnHandler()}
                className="text-white bg-black px-4 mt-2 p-2 rounded-full  block"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default OrderProductCard;
