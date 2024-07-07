"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

import Image from "next/image";

import Link from "next/link";

const CategorySlider = ({ PrimaryCategory }: any) => {
  const customPrevButton = (
    <div className="custom-swiper-button-prev-category s w-12 h-12 rounded-full flex items-center justify-center">
      <span className=" text-white ">
        <FaArrowLeftLong />
      </span>
    </div>
  );

  const customNextButton = (
    <div className="custom-swiper-button-next-category  s w-12 h-12 rounded-full flex items-center justify-center">
      <span className="  text-white ">
        <FaArrowRight />
      </span>
    </div>
  );
  return (
    <div className=" bg-white py-10 rounded-t-3xl ">
      <div className="container mx-auto  lg:flex justify-between items-end ">
        <h1 className="xl:text-[77px] text-[20px] leading-none px-4">
          We are <br /> free
        </h1>
        <h3 className="px-4">
          For us, comfort isn’t rocket science — it’s standard.
        </h3>
      </div>
      <div className="relative py-10 mx-4">
        <Swiper
          navigation={{
            prevEl: ".custom-swiper-button-prev-category",
            nextEl: ".custom-swiper-button-next-category",
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
          className="CategorySlider "
        >
          {PrimaryCategory?.primaryCategories.map((category: any) => {
            return (
              <SwiperSlide key={category?.id}>
                <div className=" max-h-full max-w-full overflow-hidden rounded-3xl relative">
                  <div className="">
                    <Image
                      className="hover:scale-110 duration-300"
                      src={`${process.env.BASE_URL}/images/${category?.photo}`}
                      width={500}
                      height={500}
                      layout="responsive"
                      alt=""
                    />
                  </div>

                  <div className="absolute bottom-10 left-10 ">
                    <Link
                      href={`/collections/${category?.primary_category_id}`}
                      className=" bg-white p-5 px-7 rounded-full hover:opacity-90 text-[20px] leading-none"
                    >
                      {category?.primary_category_name}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className=" ">
          <div className="custom-swiper-button-prev-category cursor-pointer  absolute top-0 left-0 flex items-center h-full z-40">
            {customPrevButton}
          </div>
          <div className="custom-swiper-button-next-category cursor-pointer absolute top-0 right-0 flex items-center h-full z-40">
            {customNextButton}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
