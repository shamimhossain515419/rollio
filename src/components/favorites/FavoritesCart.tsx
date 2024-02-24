"use client";
import { addFavItem } from "@/redux/features/favorite/favoriteSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";

const FavortesCart = ({ product }: any) => {
  const dispatch = useDispatch();

  return (
    <div className=" pt-2">
      <div className=" flex gap-2 items-start">
        <div className="max-w-[120px]">
          <Image
            className=" max-w-[120px]"
            width={200}
            height={200}
            src={
              "https://cdn.shopify.com/s/files/1/0146/8461/8806/products/chelsea-black.jpg?v=1660538798&width=200"
            }
            alt="image"
          ></Image>
        </div>
        <div className=" w-full">
          <Link href={"/"}>Chelsea All Black Tumble</Link>
          {/* secect option  */}
          <div className=" grid grid-cols-2 gap-[6px] pt-1">
            <select
              name=""
              id=""
              className="  border border-[#00000076] rounded-md py-[2px]  px-[3px] outline-0"
            >
              <option value="color">Color</option>
              <option value="black">Black</option>
            </select>
            {/* <select
                            name=""
                            id=""
                            className="  border border-[#00000076] rounded-md py-[2px]  px-[3px] outline-0"
                        >
                            <option value="color">Other</option>
                            <option value="black">LP</option>
                        </select> */}
            <select
              name=""
              id=""
              className="  border border-[#00000076] rounded-md py-[2px]  px-[3px] outline-0"
            >
              <option value="color">Size</option>
              <option value="black">34</option>
              <option value="black">56</option>
              <option value="black">34</option>
              <option value="black">23</option>
            </select>
          </div>
          {/* selection option button  */}
          <div className=" py-4 flex items-center gap-2">
            <div className="text-white min-w-[120px] w-full bg-[#333333] px-3 text-center rounded-[40px] py-3">
              <button className="text-[14px] font-normal">
                Select options
              </button>
            </div>
            <div>
              <div
                onClick={() => dispatch(addFavItem(product))}
                className=" w-[45px] h-[45px] cursor-pointer flex items-center justify-center gap-2 bg-[#eaeaea] rounded-full"
              >
                <IoMdClose size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavortesCart;
