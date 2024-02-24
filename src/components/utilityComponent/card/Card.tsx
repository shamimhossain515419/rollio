"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import { GrFavorite } from "react-icons/gr";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/features/cart/CartSlice";

const Card = ({ button, fav, product }: any) => {
  const dispatch = useDispatch();

  const [photos, setPhotos] = useState([]);

  // useEffect(()=>{

  // })

  return (
    <div className="relative group max-w-[590px] block  bg-white rounded-3xl overflow-hidden">
      {/* fav icon */}
      {fav && (
        <div className=" absolute top-5 left-5 w-10 h-10 border bg-white flex items-center justify-center rounded-full">
          <GrFavorite size={18} />
        </div>
      )}

      {/* image */}
      <Link href={`/products/${product?.id}`} className="">
        <Image
          className="group-hover:hidden  max-h-[500px] "
          src={product?.image1}
          width={500}
          height={500}
          layout="responsive"
          loading="lazy"
          alt=""
        />
        <Image
          className="group-hover:block hidden duration-200 max-h-[500px]"
          src={product?.image2}
          width={500}
          height={500}
          layout="responsive"
          loading="lazy"
          alt=""
        />
      </Link>
      <div className=" relative flex justify-between p-8">
        {/* button absulate */}
        {button && (
          <div
            onClick={() => dispatch(addItem(product))}
            className=" absolute right-3 bottom-3 hidden group-hover:block dur"
          >
            <Button title="Quick Add" />
          </div>
        )}

        <h2 className="text-[16px] text-[#3d4246]">{product?.name}</h2>
        <p className="text-[rgba(21,21,31,.42)]">TK: {product?.sale_price}</p>
      </div>
    </div>
  );
};

export default Card;

// card page
