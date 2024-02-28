import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const ShowReviewCard = ({ review }: any) => {
  console.log(review);
  return (
    <div className="grid md:grid-cols-3 gap-5 items-center bg-white p-10 rounded-3xl md:my-32 my-10">
      <div className="text-xl">
        <h1>{review?.name}</h1>
        <p className="text-[#9d9da1] py-2">Verified Buyer</p>
      </div>
      <div className="">
        <div className="flex items-center">
          <FaStar size={25} />
          <FaStar size={25} />
          <FaStar size={25} />
          <FaStar size={25} />
          <FaStar size={25} />
        </div>
        <div className="text-xl">
          <h1 className="py-5">Comfy!!!</h1>
          <p className="text-[#9d9da1] py-2">{review?.comment}</p>
        </div>
      </div>
      <div className="">
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
      </div>
    </div>
  );
};

export default ShowReviewCard;
