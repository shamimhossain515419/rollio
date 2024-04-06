"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const OfferSlider = () => {
  const customPrevButton = (
    <div className="custom-swiper-button-prev">
      {/* Your custom arrow or icon for the previous button */}
      <span className=" ">
        <FaArrowLeftLong />
      </span>
    </div>
  );

  const customNextButton = (
    <div className="custom-swiper-button-next ">
      {/* Your custom arrow or icon for the next button */}
      <span className="  ">
        <FaArrowRight />
      </span>
    </div>
  );

  return (
    <div className="xl:mx-20 overflow-hidden relative my-5">
      <Swiper
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        modules={[Navigation]}
        autoplay={{ delay: 300 }}
        loop={true}
        className="offerSwipper offerSliderItem xl:rounded-full"
      >
        <SwiperSlide>
          <Link href={"/campaign/1"} className="lg:text-[16px] text-[12px] ">
            <div className="flex justify-center py-2  ">
              Free international express shipping on orders over $140 USD
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/campaign/1"} className="lg:text-[16px] text-[12px] ">
            <div className="flex justify-center py-2  ">
              Free international express shipping on orders over $140 USD
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={"/campaign/1"} className="lg:text-[16px] text-[12px] ">
            <div className="flex justify-center py-2  ">
              Free international express shipping on orders over $140 USD
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>

      {/* Custom navigation buttons */}
      {/* md:flex hidden justify-between z-40 absolute top-3 w-full px-5  */}
      <div className="">
        <div className="absolute left-3 z-40 top-[14px] custom-swiper-button-prev cursor-pointer">
          {customPrevButton}
        </div>
        <div className="absolute right-3 z-40 top-[14px] custom-swiper-button-next cursor-pointer">
          {customNextButton}
        </div>
      </div>
    </div>
  );
};

export default OfferSlider;
