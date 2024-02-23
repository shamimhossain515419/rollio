"use client"
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import paymentImage from "../../../../public/images/Home/payment.png";
import Image from "next/image";
import Select from "react-select";
import Button from "@/components/utilityComponent/button/Button";
import { MdKeyboardArrowLeft } from "react-icons/md";
const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
];
const Page = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [address, setAddress] = useState(false)
    return (
        <div className="sm:mr-5">
            <div className="flex text-sm  items-center text-stone-500">
                <Link href={"/cart"}>Cart</Link> <IoIosArrowForward />
                <Link href={"/checkout/information"}>Information</Link>{" "}
                <IoIosArrowForward />
                <Link href={"/checkout/shipping"}>Shipping</Link> <IoIosArrowForward />
                <Link href={"/checkout/payment"}>Payment</Link>
            </div>
            <div>
                {/* save address  */}
                <div className=" my-10 px-3 py-2  rounded-[4px]  border  border-[#3333331f]">
                    <div className=" flex justify-between text-[#333333] items-start gap-4 py-2">
                        <div className=" flex  flex-col  lg:flex-row items-start lg:items-center">
                            <p className="text-[15px]  font-light md:w-[50px] xl:w-[70px]  md:text-[12px]">
                                Contact
                            </p>
                            <p className="text-[12px]  md:text-[13px] font-light">
                                {" "}
                                shamimhossain017@gmail.com
                            </p>
                        </div>
                        <Link className="text-[12px]  md:text-[13px] font-light" href={"/"}>
                            {" "}
                            Change
                        </Link>
                    </div>
                    <div className="border-t border-[#3333331f] my-2"></div>
                    <div className=" flex justify-between text-[#333333]  items-start gap-4 py-1">
                        <div className=" flex  flex-col  lg:flex-row items-start lg:items-center ">
                            <p className="text-[14px]  font-light md:w-[50px] xl:w-[70px]  md:text-[12px]">
                                Ship
                            </p>
                            <p className="text-[12px]  md:text-[13px] font-light">
                                {" "}
                                bogura, Dhaka 5800, Bangladesh
                            </p>
                        </div>
                        <Link className="text-[12px]  md:text-[13px] font-light" href={"/"}>
                            {" "}
                            Change
                        </Link>
                    </div>
                    <div className="border-t border-[#3333331f] my-2"></div>
                    <div className=" flex justify-between text-[#333333]  items-start gap-4 py-1">
                        <div className=" flex  flex-col  lg:flex-row items-start lg:items-center ">
                            <p className="text-[14px]  font-light md:w-[50px] xl:w-[70px]  md:text-[12px]">
                                Shipping method
                            </p>
                            <p className="text-[12px]  md:text-[13px] font-light">
                                {" "}
                                Express Courier (Air) · Free
                            </p>
                        </div>
                    </div>
                </div>
                {/* payment mathod  */}
                <div className=" py-5">
                    <div>
                        <h1 className=" text-[17px]  text-[#333333]   font-extralight ">
                            {" "}
                            Payment{" "}
                        </h1>
                        <p className="text-[12px] md:text-[14px] text-[#333333]">
                            All transactions are secured and encrypted.
                        </p>
                    </div>
                    <div className=" -ml-4 ">
                        <Image
                            className=" w-full object-fill"
                            src={paymentImage}
                            alt="image"
                        ></Image>
                    </div>
                </div>
                {/* Billing address   */}
                <div className=" py-5">
                    <div>
                        <h1 className=" text-[17px]  text-[#333333]   font-extralight ">
                            {" "}
                            Billing address{" "}
                        </h1>
                        <p className="text-[12px] md:text-[14px] text-[#333333]">
                            Select the address that matches your card or payment method.{" "}
                        </p>
                    </div>
                    <div className=" py-4">
                        <div className="border  border-[#3333331f] rounded-[4px]    ">
                            <div className="  px-3 py-4  text-[#333333] flex justify-between items-start gap-2 ">
                                <div className=" flex items-start gap-3">
                                    <div>
                                        <div onClick={() => setAddress(false)} className={` flex justify-center items-center ${address ? "border border-[#3333337b]" : " bg-[#3333337b]"}  w-[20px] h-[20px] cursor-pointer rounded-full`}>
                                            <p className=" w-[5px] h-[5px] bg-white rounded-full"></p>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-[10px]   md:text-[14px] ">
                                            Same as shipping address
                                        </h2>


                                    </div>
                                </div>

                            </div>
                            <div className="border  border-[#3333331f] "></div>
                            {/* Use a different  */}
                            <div className="px-3 py-4  text-[#333333] flex justify-between items-start gap-2 ">
                                <div className=" flex items-start gap-3">
                                    <div>
                                        <div onClick={() => setAddress(true)} className={` flex justify-center items-center ${address ? "bg-[#3333337b]" : " border border-[#3333337b]"}  w-[20px] h-[20px] cursor-pointer rounded-full`}>
                                            <p className=" w-[5px] h-[5px] bg-white rounded-full"></p>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-[10px]   md:text-[14px] ">
                                            Use a different billing address
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            {
                                address && <div>
                                    <div className="border  border-[#3333331f] "></div>
                                    <div className=" px-3 py-4 bg-[#fafafa] ">

                                        <form>
                                            {/* country  */}
                                            <div className="">
                                                <label className="py-2 block" htmlFor="country">
                                                    Country
                                                </label>
                                                <Select
                                                    id="country"
                                                    value={selectedOption}
                                                    options={options}
                                                    placeholder="Select a country"
                                                />
                                            </div>

                                            <div className=" flex gap-2">
                                                {/* First_Name  */}
                                                <div className="pt-2 w-[50%]">
                                                    <label className="py-2 block" htmlFor="First Name">
                                                        First Name
                                                    </label>
                                                    <input
                                                        name="First_Name"
                                                        className="border-2  p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                                                        type="text"
                                                        id="First Name"
                                                        placeholder="First Name"
                                                    />
                                                </div>
                                                {/* last_Name  */}
                                                <div className="pt-2 w-[50%]">
                                                    <label className="py-2 block" htmlFor="Last_Name">
                                                        Last Name
                                                    </label>
                                                    <input
                                                        name="last_Name"
                                                        className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                                                        type="text"
                                                        id="Last_Name"
                                                        placeholder="Last Name"
                                                    />
                                                </div>
                                            </div>

                                            {/* Company  */}
                                            <div className="pt-2">
                                                <label className="py-2 block" htmlFor="Company">
                                                    Company (optional)
                                                </label>
                                                <input
                                                    name="Company"
                                                    className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                                                    type="text"
                                                    id="Company"
                                                    placeholder="Company"
                                                />
                                            </div>
                                            {/* Address  */}
                                            <div className="pt-2">
                                                <label className="py-2 block" htmlFor="Address">
                                                    Address
                                                </label>
                                                <input
                                                    name="Address"
                                                    className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                                                    type="text"
                                                    id="Address"
                                                    placeholder="Address"
                                                />
                                            </div>
                                            {/* Apartment  */}
                                            <div className="pt-2">
                                                <label className="py-2 block" htmlFor="Apartment">
                                                    Apartment, suite, etc. (optional)
                                                </label>
                                                <input
                                                    name="Apartment"
                                                    className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                                                    type="text"
                                                    id="Apartment"
                                                    placeholder="Apartment"
                                                />
                                            </div>
                                            {/* Apartment  */}
                                            <div className="pt-2">
                                                <label className="py-2 block" htmlFor="Apartment">
                                                    Apartment, suite, etc. (optional)
                                                </label>
                                                <input
                                                    name="Apartment"
                                                    className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                                                    type="text"
                                                    id="Apartment"
                                                    placeholder="Apartment"
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                {/* City  */}
                                                <div className="pt-2">
                                                    <label className="py-2 block" htmlFor="City">
                                                        City
                                                    </label>
                                                    <input
                                                        name="City"
                                                        className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                                                        type="text"
                                                        id="City"
                                                        placeholder="City"
                                                    />
                                                </div>
                                                {/* Postal_code  */}
                                                <div className="pt-2">
                                                    <label className="py-2 block" htmlFor="Postal_code">
                                                        Postal code
                                                    </label>
                                                    <input
                                                        name="Postal_code"
                                                        className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                                                        type="number"
                                                        id="Postal_code"
                                                        placeholder="Postal_code"
                                                    />
                                                </div>
                                            </div>
                                            {/* Phone  */}
                                            <div className="pt-2">
                                                <label className="py-2 block" htmlFor="Phone">
                                                    Phone
                                                </label>
                                                <input
                                                    name="Phone"
                                                    className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                                                    type="number"
                                                    id="Phone"
                                                    placeholder="Phone"
                                                />
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            }



                        </div>

                    </div>
                    <div className=" py-3">
                        {/* payment text   */}
                        <p className="text-[12px]   font-thin">By clicking below and completing your order, you agree to purchase your item(s) from Global-e as merchant of record for this transaction, on Global-e’s Terms of Sale and Privacy Policy. Global-e is an international fulfilment service provider to Rollie Nation.
                        </p>
                    </div>

                    {/* shipping action  */}
                    <div className=" flex justify-between items-center gap-2  my-6 ">
                        <div>
                            <Link href={'/checkout/shipping'} className=" flex   items-center gap-[2px] text-[#333333]"> <MdKeyboardArrowLeft />   <p className="text-[12px] md:text-[13px]">Return to shipping</p></Link>
                        </div>
                        <div className="flex justify-end mt-4">
                            <Button title="Complete Order" />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Page;
