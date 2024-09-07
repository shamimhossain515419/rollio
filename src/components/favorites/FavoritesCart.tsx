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
        <div className="max-w-[120px] border  border-gray-300 rounded overflow-hidden">
          <Image
            className=" max-w-[120px] object-cover rounded"
            width={200}
            height={200}
            src={`${process.env.BASE_URL}/images/${product?.photos?.[0]?.photo}`}
            alt="image"
          ></Image>
        </div>
        <div className=" w-full">
          <Link href={"/"} className="capitalize">{product?.name}</Link>
          {/* select option  */}
          <div className=" grid grid-cols-2 gap-[6px] pt-1">
            <select
              name=""
              id=""
              className="  border border-[#00000076] rounded-md py-[2px]  px-[3px] outline-0"
            >
              <option value="color">Color</option>
              <option value="black">Black</option>
            </select>
         
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
              <Link href={`/products/${product?.id}`} className="text-[14px] font-normal">
                Select options
              </Link>
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
