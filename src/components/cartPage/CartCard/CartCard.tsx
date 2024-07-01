"use client";
import {
  addItem,
  deleteItem,
  removeItem,
} from "@/redux/features/cart/CartSlice";
import { ProductInterface } from "@/types/Productinterface";
import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const CartCard = () => {
  const { cartItems } = useSelector((state: any) => state.Cart);
  const dispatch = useDispatch();

  return (
    <div>
      {cartItems.map((product: any, index: number) => (
        <div
          key={index}
          className="relative px-5 grid grid-cols-3 gap-1 md:gap-2 lg:gap-4 xl:gap-5 w-full items-center"
        >
          {/* remove icon */}
          <div className=" absolute right-5 top-5">
            <IoClose
              onClick={() =>
                dispatch(
                  deleteItem({
                    id: product?.id,
                    extraIngredients: product?.extraIngredients,
                  })
                )
              }
              className="cursor-pointer text-[20px]"
            />
          </div>
          <div className="">
            <Image
              className=" rounded-xl "
              width={100}
              height={100}
              layout="responsive"
              // src={product?.image1}
              src={`https://dejavu.lifestyle/images/${product?.photos[0]?.photo}`}
              alt="image"
            ></Image>
          </div>

          <div>
            <div>
              <h3 className="text-[17px] font-medium  text-black  ">
                {product?.name}
              </h3>
              {/* <h3 className="text-[17px] font-medium  text-black ">
                Crinkle Patent/Black
              </h3> */}
              <p className="text-[15px] opacity-70">BLCK / LP / 42</p>
            </div>
            <div className=" border-b  border-black inline-block   pt-2">
              <div className=" flex items-center gap-3 md:gap-8">
                <button
                  onClick={() => dispatch(removeItem(product?.id))}
                  className="text-[16px]  md:text-[20px] font-bold "
                >
                  -
                </button>
                <p className="text-[16px]  md:text-[16px] font-medium ">
                  {product?.quantity}
                </p>
                <button
                  onClick={() => dispatch(addItem(product))}
                  className="text-[16px]  md:text-[20px] font-bold "
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end w-full">
            <div className="">
              <p>TK </p>
              <p>{product?.totalPrice}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartCard;
