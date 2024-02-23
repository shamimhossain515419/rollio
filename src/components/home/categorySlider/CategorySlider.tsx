"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import Card from "@/components/utilityComponent/card/Card";
import CategoryCard from "@/components/utilityComponent/CategoryCard/CategoryCard";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const CategorySlider = () => {
  const [derby, setDerby] = useState(false);
  const [Sneakers, setSneakers] = useState(false);
  const [Icons, setIcons] = useState(false);

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
          <SwiperSlide>
            <div className=" max-h-full max-w-full overflow-hidden rounded-3xl relative">
              <div className="">
                <Image
                  className="hover:scale-110 duration-300"
                  src="https://www.rollienation.com/cdn/shop/files/weekedner-mobile_550x.jpg?v=1655780930"
                  width={500}
                  height={500}
                  layout="responsive"
                  alt=""
                />
              </div>
              <div className="absolute bottom-10 left-10 ">
                <Link href={'/collections/womens'} className=" bg-white p-5 px-7 rounded-full hover:opacity-90 text-[20px] leading-none">
                  Womens
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" max-h-full max-w-full overflow-hidden rounded-3xl relative">
              <div className="">
                <Image
                  className="hover:scale-110 duration-300"
                  src="https://www.rollienation.com/cdn/shop/files/Men_78afae33-0da4-4908-910b-d6177235d722_550x.jpg?v=1655780752"
                  width={500}
                  height={500}
                  layout="responsive"
                  alt=""
                />
              </div>
              <div className="absolute bottom-10 left-10 ">
                <Link href={'/collections/mens'} className=" bg-white p-5 px-7 rounded-full hover:opacity-90 text-[20px] leading-none">
                  Men
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              onClick={() => setDerby(!derby)}
              className=" max-h-full max-w-full overflow-hidden rounded-3xl relative cursor-pointer"
            >
              <div className="">
                <Image
                  className="hover:scale-110 duration-300"
                  src="https://www.rollienation.com/cdn/shop/files/derby-mobile_8d34df91-19ca-487f-a37a-ecd34bd9a150_550x.jpg?v=1655780629"
                  width={500}
                  height={500}
                  layout="responsive"
                  alt=""
                />
              </div>
              <div className="absolute bottom-10 left-10 ">
                {derby && (
                  <div className="flex flex-col gap-4">
                    <button className=" bg-white p-5 px-7 rounded-full hover:opacity-90 text-[20px] leading-none">
                      Men
                    </button>
                    <button className=" bg-white p-5 px-7 rounded-full hover:opacity-90 text-[20px] leading-none">
                      Women
                    </button>
                  </div>
                )}

                {!derby && (
                  <button className=" bg-white p-5 px-7 rounded-full hover:opacity-90 text-[20px] leading-none">
                    Derby
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              onClick={() => setSneakers(!Sneakers)}
              className=" max-h-full max-w-full overflow-hidden rounded-3xl relative cursor-pointer"
            >
              <div className="">
                <Image
                  className="hover:scale-110 duration-300"
                  src="https://www.rollienation.com/cdn/shop/files/sneakers-mobile_35358729-b1b5-4f1d-bee4-44473aeb9674_550x.jpg?v=1655780830"
                  width={500}
                  height={500}
                  layout="responsive"
                  alt=""
                />
              </div>

              {/*  */}
              <div className="absolute bottom-10 left-10 ">
                {Sneakers && (
                  <div className="flex flex-col gap-4">
                    <button className=" bg-white p-5 px-7 rounded-full hover:opacity-90 text-[20px] leading-none">
                      Men
                    </button>
                    <button className=" bg-white p-5 px-7 rounded-full hover:opacity-90 text-[20px] leading-none">
                      Women
                    </button>
                  </div>
                )}

                {!Sneakers && (
                  <button className=" bg-white p-5 px-7 rounded-full hover:opacity-90 text-[20px] leading-none">
                    Sneakers
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              onClick={() => setIcons(!Icons)}
              className=" max-h-full max-w-full overflow-hidden rounded-3xl relative cursor-pointer"
            >
              <div className="">
                <Image
                  className="hover:scale-110 duration-300"
                  src="https://www.rollienation.com/cdn/shop/files/weekedner-mobile_550x.jpg?v=1655780930"
                  width={500}
                  height={500}
                  layout="responsive"
                  alt=""
                />
              </div>

              {/*  */}
              <div className="absolute bottom-10 left-10 ">
                {Icons && (
                  <div className="flex flex-col gap-4">
                    <button className=" bg-white p-5 px-7 rounded-full hover:opacity-90 text-[20px] leading-none">
                      Men
                    </button>
                    <button className=" bg-white p-5 px-7 rounded-full hover:opacity-90 text-[20px] leading-none">
                      Women
                    </button>
                  </div>
                )}

                {!Icons && (
                  <button className=" bg-white p-5 px-7 rounded-full hover:opacity-90 text-[20px] leading-none">
                    The Icons
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
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
