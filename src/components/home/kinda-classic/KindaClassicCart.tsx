'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import './kindaclassic.css';
import Link from 'next/link';
const KindaClassicCart = ({ doubleProduct }: any) => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const productOne = doubleProduct?.[0];
  const productTwo = doubleProduct?.[1];
  return (
    <div className=" flex  flex-col gap-5 ">
      <Link
        href={`/products/${productOne?.id}`}
        onMouseLeave={() => setActive1(false)}
        onMouseOverCapture={() => setActive1(true)}
        className={`w-full ${active1 ? 'h-[550px]' : 'h-[450px]'} ${
          active2 ? ' !h-[350px]' : 'h-[450px]'
        }   bg-white   duration-700  rounded-3xl overflow-hidden`}
      >
        <div className={`  h-full  `}>
          {/* video and image section  */}
          {active1 ? (
            <div className=" w-full h-full">
              <video
                className=" videoCart w-full  rounded-3xl"
                src={productOne?.video_url}
                autoPlay
                loop
                muted
              ></video>
            </div>
          ) : (
            <Image
              className=" h-full w-full object-cover overflow-hidden"
              width={100}
              height={100}
              src={process.env.BASE_URL + '/images/' + productOne?.photo}
              alt="image"
              layout="responsive"
            ></Image>
          )}
        </div>
      </Link>
      {/* second image and video  section  */}
      <Link
        href={`/products/${productTwo?.id}`}
        onMouseLeave={() => setActive2(false)}
        onMouseOverCapture={() => setActive2(true)}
        className=" w-full !overflow-hidden"
      >
        <div
          className={`w-full ${active2 ? 'h-[550px]' : 'h-[450px]'} ${
            active1 ? 'h-[350px]' : 'h-[450px]'
          }   duration-700  rounded-3xl !overflow-hidden`}
        >
          {active2 ? (
            <div className=" w-full h-full">
              <video
                className=" videoCart w-full  rounded-3xl"
                autoPlay
                loop
                muted
              >
                <source src={productTwo?.video_url} type="video/mp4" />
              </video>
            </div>
          ) : (
            <Image
              className=" h-full w-full object-cover"
              width={100}
              height={100}
              src={process.env.BASE_URL + '/images/' + productTwo?.photo}
              alt="image"
              layout="responsive"
            ></Image>
          )}
        </div>
      </Link>
    </div>
  );
};

export default KindaClassicCart;
