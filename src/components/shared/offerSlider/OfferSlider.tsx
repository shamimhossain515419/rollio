"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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
        className="offerSwipper offerSliderItem xl:rounded-full"
      >
        <SwiperSlide>
          <div className="flex justify-center py-2  ">
            <p className="lg:text-[16px] text-[12px]">
              Free international express shipping on orders over $140 USD
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center py-2  ">
            <p className="lg:text-[16px] text-[12px]">
              Free international express shipping on orders over $140 USD
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="md:flex hidden justify-between z-40 absolute top-3 w-full px-5 ">
        <div className="custom-swiper-button-prev">{customPrevButton}</div>
        <div className="custom-swiper-button-next">{customNextButton}</div>
      </div>
    </div>
  );
};

export default OfferSlider;
