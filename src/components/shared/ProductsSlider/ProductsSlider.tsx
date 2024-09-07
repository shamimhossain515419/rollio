"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { ProductInterface } from "@/types/Productinterface";
import HomeCart from "@/components/utilityComponent/card/HomeCart";
const ProductsSlider = ({ title,recentlyViewProducts }: any) => {

  console.log(title,recentlyViewProducts )
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
    <div className="m-5">
      <div className="container mx-auto">
        <h1 className="xl:text-[77px] text-[20px] text-white">{title}</h1>
      </div>
      <div className="relative py-10">
        <Swiper
          loop={true}
          navigation={{
            prevEl: ".custom-swiper-button-prev",
            nextEl: ".custom-swiper-button-next",
          }}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="bestSeller "
        >
          {recentlyViewProducts?.map((product: ProductInterface) => (
            <SwiperSlide key={product?.id}>
             <HomeCart product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons flex */}
        <div className=" hidden  justify-end gap-5 z-40  absolute -top-6 left-0 w-full xl:px-5 ">
          <div className="custom-swiper-button-prev cursor-pointer">
            {customPrevButton}
          </div>
          <div className="custom-swiper-button-next cursor-pointer">
            {customNextButton}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSlider;
