import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const ModalCardWithSlider = ({ products }: any) => {
  return (
    <div>
      <div className="relative py-10">
        <Swiper
          loop={true}
          navigation={{
            prevEl: ".custom-swiper-button-prev",
            nextEl: ".custom-swiper-button-next",
          }}
          slidesPerView={4}
          spaceBetween={5}
          modules={[Pagination, Navigation]}
          className="bestSeller"
        >
          {products?.map((product: any) => (
            <SwiperSlide key={product?.id}>
              <div>
                <Link href={`/products/${product?.id}`}>
                  <Image
                    className="w-[80px] h-[90px] border border-[#8c81810d] overflow-hidden rounded-lg"
                    width={80}
                    height={90}
                    src={`${process.env.BASE_URL + "/images/"}${
                      product?.photo || product?.photos?.[0]?.photo
                    }`}
                    alt={product?.name || "Product Image"}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ModalCardWithSlider;
