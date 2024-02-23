"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Newfind = () => {

    return (
        <div className=" bg-[#3C455A] shadow-md sm:rounded-[40px] py-8   px-2 sm:px-5 overflow-hidden z-50 w-full ">
            <div className=" flex justify-between">
                <h1 className="text-[17px] text-center text-white lg:text-[20px] font-medium  ">
                    Wanna spruce up your new find?
                </h1>
                <div className=" flex  items-center gap-3 text-white">
                    <IoIosArrowBack
                        // onClick={goPrev}
                        className=" cursor-pointer custom-swiper-button-next-category"
                        size={24}
                    />

                    <IoIosArrowForward
                        // onClick={goNext}
                        className=" cursor-pointer custom-swiper-button-prev-category"
                        size={24}
                    />
                </div>
            </div>
            <div className=' w-full overflow-hidden '>

                <Swiper

                    slidesPerView={1}
                    navigation={{
                        prevEl: ".custom-swiper-button-prev-category",
                        nextEl: ".custom-swiper-button-next-category",
                    }}
                    loop={true}
                    spaceBetween={10}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                    }}
                    className=" w-[240px] sm:w-full overflow-hidden "
                >
                    <SwiperSlide>
                        <div className=' py-3 flex gap-4'>
                            <Image className=' rounded-3xl' width={100} height={120} src={"https://cdn.shopify.com/s/files/1/0146/8461/8806/products/AP00018_BLACK_LP_S_M_RN_Socks_Black_L_104x.jpg?v=1668123004"} alt='image'></Image>
                            <div >
                                <h3 className='text-white pb-2'>Puffy Tote Bag Black</h3>
                                <div className=' bg-[#c5c8d0af]  hover:bg-white hover:text-black duration-100   uppercase flex justify-center items-center gap-1 py-2 px-4 rounded-[40px] text-black '>
                                    <button>Tk 36 . ADD</button>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' py-3 flex gap-4'>
                            <Image className=' rounded-3xl' width={100} height={120} src={"https://cdn.shopify.com/s/files/1/0146/8461/8806/files/AP00030MIXED_S_db91fc7e-18ce-45c8-9204-4db5d23d5a2d_104x.jpg?v=1699482922"} alt='image'></Image>
                            <div >
                                <h3 className='text-white pb-2'>Puffy Tote Bag Black</h3>
                                <div className=' bg-[#c5c8d0af]  hover:bg-white hover:text-black duration-100   uppercase flex justify-center items-center gap-1 py-2 px-4 rounded-[40px] text-black '>
                                    <button>Tk 36 . ADD</button>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' py-3 flex gap-4'>
                            <Image className=' rounded-3xl' width={100} height={120} src={"https://cdn.shopify.com/s/files/1/0146/8461/8806/files/AP00025PINKLPS_M_L_104x.jpg?v=1687233126"} alt='image'></Image>
                            <div >
                                <h3 className='text-white pb-2'>Puffy Tote Bag Black</h3>
                                <div className=' bg-[#c5c8d0af]  hover:bg-white hover:text-black duration-100   uppercase flex justify-center items-center gap-1 py-2 px-4 rounded-[40px] text-black '>
                                    <button>Tk 36 . ADD</button>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' py-3 flex gap-4'>
                            <Image className=' rounded-3xl' width={100} height={120} src={"https://cdn.shopify.com/s/files/1/0146/8461/8806/products/AP00018_BLACK_LP_S_M_RN_Socks_Black_L_104x.jpg?v=1668123004"} alt='image'></Image>
                            <div >
                                <h3 className='text-white pb-2'>Puffy Tote Bag Black</h3>
                                <div className=' bg-[#c5c8d0af]  hover:bg-white hover:text-black duration-100   uppercase flex justify-center items-center gap-1 py-2 px-4 rounded-[40px] text-black '>
                                    <button>Tk 36 . ADD</button>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' py-3 flex gap-4'>
                            <Image className=' rounded-3xl' width={100} height={120} src={"https://cdn.shopify.com/s/files/1/0146/8461/8806/products/AP00018_BLACK_LP_S_M_RN_Socks_Black_L_104x.jpg?v=1668123004"} alt='image'></Image>
                            <div >
                                <h3 className='text-white pb-2'>Puffy Tote Bag Black</h3>
                                <div className=' bg-[#c5c8d0af]  hover:bg-white hover:text-black duration-100   uppercase flex justify-center items-center gap-1 py-2 px-4 rounded-[40px] text-black '>
                                    <button>Tk 36 . ADD</button>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' py-3 flex gap-4'>
                            <Image className=' rounded-3xl' width={100} height={120} src={"https://cdn.shopify.com/s/files/1/0146/8461/8806/products/AP00018_BLACK_LP_S_M_RN_Socks_Black_L_104x.jpg?v=1668123004"} alt='image'></Image>
                            <div >
                                <h3 className='text-white pb-2'>Puffy Tote Bag Black</h3>
                                <div className=' bg-[#c5c8d0af]  hover:bg-white hover:text-black duration-100   uppercase flex justify-center items-center gap-1 py-2 px-4 rounded-[40px] text-black '>
                                    <button>Tk 36 . ADD</button>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    );
};

export default Newfind;
