"use client";
import { CartInitialStateInterface } from "@/types/CartInitialStateInterface";
import { ProductInterface } from "@/types/Productinterface";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const ProductListPrice = () => {
  const { cartItems, totalAmount, totalQuantity }: CartInitialStateInterface = useSelector(
    (state: any) => state.Cart
  );
  return (
    <div className=" border-l px-4">
      {/* products */}
      <div className="grid grid-cols-1 gap-3 border-b pb-4">
        {cartItems?.map((product: ProductInterface) => (
          <div
            key={product.id}
            className="text-sm flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute top-0 right-0 w-5 h-5 bg-slate-300 rounded-full flex items-center justify-center">
                  <span>{product?.quantity}</span>
                </div>
                <Image
                  className="shadow-lg rounded-lg"
                  src={`https://getmicrojobs.com/images/${product?.photos?.[0]?.photo}`}
                  width={80}
                  height={80}
                  alt=""
                />
              </div>
              <div className="">
                <h2>{product?.name}</h2>
                <p>৳ {product?.sale_price}</p>
              </div>
            </div>
            {/* price */}
            <h3> ৳ {product?.totalPrice}</h3>
          </div>
        ))}
      </div>

      {/* Discount code or gift card */}
      <div className=" flex gap-4 w-full py-10 border-b">
        <input
          className="border-2 px-2 rounded-lg w-full focus:outline-none focus:border-black ease-in duration-300"
          placeholder="Discount code or gift card"
          type="text"
        />
        <button
          className="bg-[#15151f] hover:bg-[#383849] text-white rounded-full px-8 py-1 duration-300 ease-in"
          type="submit"
        >
          Apply
        </button>
      </div>

      {/* calculation */}
      <div className="py-5 font-light text-[#78716c]">
        {/* Subtotal */}
        <div className="flex justify-between py-1">
          <p>Subtotal</p>
          <p className="font-semibold text-black">৳ {totalAmount}</p>
        </div>
        {/* Subtotal */}
        <div className="flex justify-between py-1">
          <p>Shipping </p>
          <p className="">Calculated at next step</p>
        </div>
      </div>
    </div>
  );
};

export default ProductListPrice;
