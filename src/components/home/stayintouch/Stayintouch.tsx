import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaPinterest, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Stayintouch = () => {
    return (
        <div className="bg-white   px-4 rounded-3xl w-full overflow-hidden ">
            <div className=" max-w-[1500px] mx-auto  py-3 md:px-10">
                <div className="  md:p-10 w-full">
                    <div className="  flex justify-between gap-5 pb-5">
                        {/* first  social  media section  */}
                        <div className=" flex items-start gap-5">
                            <div className=" pt-5  bouncing-element rounded-[29px] overflow-hidden ">
                                <Image
                                    className="rounded-2xl"
                                    width={200}
                                    height={200}
                                    src={
                                        "https://www.rollienation.com/cdn/shop/files/influencer-1_224x.webp?v=1659490475"
                                    }
                                    alt="image"
                                ></Image>
                            </div>
                            <Link
                                href={"/"}
                                className="   hidden border lg:inline-block duration-200  cursor-pointer  border-gray-600 p-4 rounded-full hover:text-white hover:bg-[#C2BFDF] "
                            >
                                <FaFacebookF size={21}></FaFacebookF>
                            </Link>
                        </div>
                        <div className=" flex items-center gap-5  ">
                            <div className="   rounded-[29px]  ">
                                <Image
                                    className="  bouncing-element  rounded-2xl h-full w-full  object-contain"
                                    width={250}
                                    height={250}
                                    src={
                                        "https://www.rollienation.com/cdn/shop/files/influencer-2_200x.webp?v=1659490489"
                                    }
                                    alt="image"
                                ></Image>
                            </div>
                            <Link
                                href={"/"}
                                className=" border hidden  lg:inline-block duration-200  cursor-pointer  border-gray-600 p-4 rounded-full hover:text-white hover:bg-[#C2BFDF] "
                            >
                                <FaInstagram size={21}></FaInstagram>
                            </Link>
                        </div>
                    </div>
                    <div className=" py-5    lg:py-0 w-full">
                        <div className=" w-full">
                            {/* stay in touch  title  */}
                            <h1 className=" text-center text-[70px] leading-[80px] sm:leading-[120px]  lg:leading-[140px] xl:leading-[190px] font-b md:text-[120px] xl:text-[150px] font-semibold ">
                                Stay in touch
                            </h1>

                            <div className=" w-full">
                                {/* subscribe input  filed  */}
                                <div className=" relative  flex items-center max-w-[600px] mx-auto  py-2">
                                    <input
                                        className=" outline-0 w-[60%]  py-2 md:py-4 relative border border-black pr-[50px] bg-transparent text-black placeholder:text-black rounded-[50px] px-5 placeholder: text-[18px] lx:text-[22px] "
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Enter Email..."
                                    />
                                    <div className="  w-[40%]  py-3 md:py-4 -ml-[45px] px-6 md:px-10 text-white duration-300 bg-black flex hover:opacity-95  justify-center items-center  text-[#020202e1]   text-[16px] cursor-pointer  md:text-[20px]  rounded-[50px]">
                                        <span>Join</span>
                                        <span className=" hidden lg:block pl-1">
                                            {" "} Rollie Nation
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second  social  media section  */}
                    <div className="  flex justify-between py-3  gap-5 xl:mt-[-82px]">
                        <div className=" flex items-center gap-5">
                            <Link
                                href={"/"}
                                className=" border hidden  lg:inline-block duration-200  cursor-pointer  border-gray-600 p-4 rounded-full hover:text-white hover:bg-[#C2BFDF] "
                            >
                                <FaTiktok size={21}></FaTiktok>
                            </Link>
                            <div className=" pt-5 bouncing-element  rounded-[29px]  overflow-hidden">
                                <Image
                                    className="rounded-2xl"
                                    width={200}
                                    height={200}
                                    src={
                                        "https://www.rollienation.com/cdn/shop/files/influencer-3_224x.webp?v=1659490508"
                                    }
                                    alt="image"
                                ></Image>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 ">
                            <Link
                                href={"/"}
                                className=" border hidden  lg:inline-block duration-200  cursor-pointer  border-gray-600 p-4 rounded-full hover:text-white hover:bg-[#C2BFDF] "
                            >
                                <FaPinterest size={21}></FaPinterest>
                            </Link>
                            <div className=" rounded-[29px]   ">
                                <Image
                                    className="rounded-2xl bouncing-element h-full w-full  object-cover"
                                    width={250}
                                    height={250}
                                    src={
                                        "https://www.rollienation.com/cdn/shop/files/influencer-4_280x.webp?v=1659490523"
                                    }
                                    alt="image"
                                ></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stayintouch;
