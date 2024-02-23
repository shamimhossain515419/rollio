"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import Image from "next/image";

const ProductPhotoSlider = ({ photos }: any) => {
  return (
    <div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className=""
      >
        {photos.map((photo: any, i: number) => (
          <SwiperSlide key={i}>
            <Image
              className="rounded-2xl"
              src={photo.image}
              width={100}
              height={100}
              layout="responsive"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductPhotoSlider;
