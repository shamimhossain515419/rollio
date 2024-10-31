"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import { GrFavorite } from "react-icons/gr";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/features/cart/CartSlice";
import { addFavItem } from "@/redux/features/favorite/favoriteSlice";
import { ProductInterface } from "@/types/Productinterface";
import { truncateCharacters } from "@/utility/descriptionTextCounter";
import { calculateDiscountedPrice } from "@/utility/calculateDiscount";

const HomeCartHandPic = ({ button, fav, product }: any) => {
  const dispatch = useDispatch();

  const { favItems } = useSelector((state: any) => state.favItems);
  const alreadyFav = favItems.find(
    (fav: ProductInterface) => fav?.id === product?.id
  );
  return (
    <div className="relative group max-w-[590px] block h-full  bg-white rounded-3xl overflow-hidden">
      {/* fav icon */}
      {fav && (
        <div
          onClick={() => dispatch(addFavItem(product))}
          className={` ${
            alreadyFav?.id ? "bg-black text-white" : "bg-white "
          } absolute top-5 left-5 w-10 h-10 border  flex items-center justify-center rounded-full cursor-pointer hover:text-white hover:bg-black duration-300 ease-in`}
        >
          <GrFavorite size={18} />
        </div>
      )}

      {/* image */}
      <div className=" h-[400px] overflow-hidden">
        <Link href={`/products/${product?.id}`} className=" h-full">
          <Image
            className=" w-full h-full "
            src={process.env.BASE_URL + "/images/" + product?.photo}
            width={500}
            height={500}
           
            loading="lazy"
            alt=""
          />
        </Link>
      </div>
      <div className="relative flex justify-between py-8 px-2 md:px-4">
        {/* button  absolute */}
        {button && (
          <div
            onClick={() => dispatch(addItem(product))}
            className=" absolute right-3 bottom-3 hidden group-hover:block"
          >
            <Button title="Quick Add" />
          </div>
        )}

        <h2 className="text-[16px] capitalize text-[#3d4246]">
          {truncateCharacters(product?.name, 20)}
        </h2>
        <div className=" text-sm">
          
          {parseFloat(product?.discount) > 0 ? (
            <div className="flex items-center gap-1">
              <p className="text-[rgba(21,21,31,.42)] line-through">
                TK: {product?.sale_price}
              </p>
              <p className="text-[rgba(0,0,0,0.97)]">
                TK:{" "}
                {calculateDiscountedPrice(
                  parseFloat(product?.sale_price),
                  parseFloat(product?.discount)
                )}
              </p>
            </div>
          ) : (
            <p className="text-[rgb(0,0,0)]">
              TK: {product?.sale_price}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCartHandPic;

// card page