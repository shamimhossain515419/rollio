import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";

const ShowReviewCard = ({ review }: any) => {
  const isDecimal = Number.isInteger(parseFloat(review.rating));

  var integerPart = Math.floor(parseFloat(review.rating));

  return (
    <div className="grid md:grid-cols-3 gap-5 items-center bg-white p-10 rounded-3xl my-10">
      <div className="text-xl">
        <h1>{review?.name}</h1>
        <p className="text-[#9d9da1] py-2">Verified Buyer</p>
      </div>
      <div className="">
        <div className="flex items-center">
          {Array.from({ length: integerPart }, (_, i) => (
            <FaStar size={25} key={i} />
          ))}

          {!isDecimal && <IoStarHalf size={25} />}

          <span>{review.rating}</span>
        </div>
        <div className="text-xl">
          <h1 className="py-5">Comfy!!!</h1>
          <p className="text-[#9d9da1] py-2">{review?.comment}</p>
        </div>
      </div>
      {/* <div className="">
        <Image
          className="rounded-2xl"
          src={
            "https://cdn.shopify.com/s/files/1/0146/8461/8806/files/Rollie_Shot_47_WaveMGreen_White_1865_x800.jpg?v=1695262271"
          }
          width={300}
          height={300}
          layout="responsive"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default ShowReviewCard;
