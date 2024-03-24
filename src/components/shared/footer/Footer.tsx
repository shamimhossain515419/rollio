"use client";
import Link from "next/link";
import "./footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { SiteModalToggle } from "@/redux/features/sitemodal/SiteModalSlice";
import { accountToggle } from "@/redux/features/account/AccountSlice";
import { useDispatch } from "react-redux";

const Footer = ({ websiteInfo }: any) => {
  const [help, setHelp] = useState(false);
  const [contact, setContact] = useState(false);
  const [shop, setShop] = useState(false);

  const dispatch = useDispatch();
  return (
    <div className="  px-4 md:px-10 pt-10">
      <div className=" py-10">
        <div className=" grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-14">
          <div className=" col-span-1 xl:col-span-2  ">
            <div>
              {/* footer headnig  */}
              <h1 className=" text-[20px] text-center    md:text-start  text-white  md:text-[55px] text-secondary font-bold  ">
                Let’s stay in touch.
              </h1>
              <div className=" relative  flex items-center max-w-[600px]  py-2">
                <input
                  className=" outline-0  relative border border-white md:pr-[200px] xl:pr-[257px] py-2 xl:py-5 bg-transparent text-white placeholder:text-white rounded-[50px] px-5 placeholder: text-[18px] lx:text-[22px] w-full"
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email..."
                />
                <div className="  hover:bg-[#ffffffda] duration-300 bg-white flex justify-center items-center   right-0  md:max-w-[200px]   absolute  text-[#020202e1]   text-[14px] cursor-pointer  md:text-[20px]  px-5  py-2 xl:py-5 rounded-[50px]">
                  Join{" "}
                  <span className=" hidden md:block pl-1">
                    {" "}
                    {websiteInfo?.name}
                  </span>
                </div>
              </div>
            </div>
            <div className=" hidden md:block">
              <div className="  max-w-[500px]   -rotate-12 flex  flex-col justify-center items-start py-4">
                <div className="flex  flex-col justify-center items-star">
                  <h1 className="text-[80px]  md:text-[100px]   py-0   leading-[180px]   text-white font-extrabold">
                    {websiteInfo?.name}
                  </h1>
                  <div className=" group flex items-center  justify-center gap-4 text-white md:gap-10">
                    <Link
                      href={"/"}
                      className=" group-hover:opacity-100 opacity-90"
                    >
                      {" "}
                      <FaFacebookF size={22}></FaFacebookF>{" "}
                    </Link>
                    <Link
                      href={"/"}
                      className=" group-hover:opacity-100 opacity-90"
                    >
                      {" "}
                      <FaInstagram size={22}></FaInstagram>{" "}
                    </Link>
                    <Link
                      href={"/"}
                      className=" group-hover:opacity-100 opacity-90"
                    >
                      {" "}
                      <SiTiktok size={22}></SiTiktok>{" "}
                    </Link>
                    <Link
                      href={"/"}
                      className=" group-hover:opacity-100 opacity-90"
                    >
                      {" "}
                      <FaPinterest size={22}></FaPinterest>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-1 xl:col-span-1 hidden md:block text-white  ">
            <div className="pt-2 grid md:grid-cols-2 gap-2">
              <div>
                <h2 className=" text-[18px] lx:text-[22px] font-bold opacity-70">
                  Help
                </h2>
                <div>
                  <ul>
                    <li className="group cursor-pointer  relative  duration-500  flex items-center  py-1 ">
                      <div
                        onClick={() => {
                          dispatch(SiteModalToggle()),
                            dispatch(accountToggle());
                        }}
                        className="flex items-center  font-bold"
                      >
                        <div className=" group-hover:w-[20px] w-0 duration-500 overflow-hidden ">
                          <p className=" duration-500   w-[13px] h-[13px]  border-2  border-white  rounded-full"></p>
                        </div>
                        <span className=" text-[18px] lx:text-[22px]">
                          {" "}
                          My Account
                        </span>
                      </div>
                    </li>
                    <li className="group  relative  duration-500  flex items-center py-1 ">
                      <Link
                        href={"/"}
                        className="   duration-500 flex items-center  font-bold"
                      >
                        <div className=" group-hover:w-[20px] w-0 duration-500 overflow-hidden ">
                          <p className=" duration-500   w-[13px] h-[13px]  border-2  border-white  rounded-full"></p>
                        </div>
                        <span className=" text-[18px] lx:text-[22px]">
                          Educator Offer
                        </span>
                      </Link>
                    </li>
                    <li className="group  relative  duration-500  flex items-center py-1  ">
                      <Link
                        href={"/page/shipping"}
                        className="   duration-500 flex items-center  font-bold"
                      >
                        <div className=" group-hover:w-[20px] w-0 duration-500 overflow-hidden ">
                          <p className=" duration-500   w-[13px] h-[13px]  border-2  border-white  rounded-full"></p>
                        </div>
                        <span className=" text-[18px] lx:text-[22px]">
                          Shipping
                        </span>
                      </Link>
                    </li>
                    <li className="group  relative  duration-500  flex items-center py-1  ">
                      <Link
                        href={"/page/faq"}
                        className="   duration-500 flex items-center  font-bold"
                      >
                        <div className=" group-hover:w-[20px] w-0 duration-500 overflow-hidden ">
                          <p className=" duration-500   w-[13px] h-[13px]  border-2  border-white  rounded-full"></p>
                        </div>
                        <span className=" text-[18px] lx:text-[22px]">
                          FAQs
                        </span>
                      </Link>
                    </li>
                    <li className="group  relative  duration-500  flex items-center py-1 ">
                      <Link
                        href={"/"}
                        className="   duration-500 flex items-center  font-bold"
                      >
                        <div className=" group-hover:w-[20px] w-0 duration-500 overflow-hidden ">
                          <p className=" duration-500   w-[13px] h-[13px]  border-2  border-white  rounded-full"></p>
                        </div>
                        <span className=" text-[18px] lx:text-[22px]">
                          {" "}
                          Student Offer
                        </span>
                      </Link>
                    </li>
                    <li className="group  relative  duration-500  flex items-center py-1 ">
                      <Link
                        href={"/page/returns"}
                        className="   duration-500 flex items-center  font-bold"
                      >
                        <div className=" group-hover:w-[20px] w-0 duration-500 overflow-hidden ">
                          <p className=" duration-500   w-[13px] h-[13px]  border-2  border-white  rounded-full"></p>
                        </div>
                        <span className=" text-[18px] lx:text-[22px]">
                          {" "}
                          Returns
                        </span>
                      </Link>
                    </li>

                    <li className="group  relative  duration-500  flex items-center py-1 ">
                      <Link
                        href={"/"}
                        className="   duration-500 flex items-center  font-bold"
                      >
                        <div className=" group-hover:w-[20px] w-0 duration-500 overflow-hidden ">
                          <p className=" duration-500   w-[13px] h-[13px]  border-2  border-white  rounded-full"></p>
                        </div>
                        <span className=" text-[18px] lx:text-[22px]">
                          {" "}
                          Find a Store
                        </span>
                      </Link>
                    </li>
                    <li className="group  relative  duration-500  flex items-center py-1 ">
                      <Link
                        href={"/page/contact/"}
                        className="   duration-500 flex items-center  font-bold"
                      >
                        <div className=" group-hover:w-[20px] w-0 duration-500 overflow-hidden ">
                          <p className=" duration-500   w-[13px] h-[13px]  border-2  border-white  rounded-full"></p>
                        </div>
                        <span className=" text-[18px] lx:text-[22px]">
                          {" "}
                          Contact Us
                        </span>
                      </Link>
                    </li>
                    <li className="group  relative  duration-500  flex items-center py-1 ">
                      <Link
                        href={"/"}
                        className="   duration-500 flex items-center  font-bold"
                      >
                        <div className=" group-hover:w-[20px] w-0 duration-500 overflow-hidden ">
                          <p className=" duration-500   w-[13px] h-[13px]  border-2  border-white  rounded-full"></p>
                        </div>
                        <span className=" text-[18px] lx:text-[22px]">
                          {" "}
                          International
                        </span>
                      </Link>
                    </li>
                    <li className="group  relative  duration-500  flex items-center py-1 ">
                      <Link
                        href={"/page/terms"}
                        className="   duration-500 flex items-center  font-bold"
                      >
                        <div className=" group-hover:w-[20px] w-0 duration-500 overflow-hidden ">
                          <p className=" duration-500   w-[13px] h-[13px]  border-2  border-white  rounded-full"></p>
                        </div>
                        <span className=" text-[18px] lx:text-[22px]">
                          {" "}
                          Terms & Conditions
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div>
                  <h2 className=" text-[18px] lx:text-[22px] font-bold opacity-70">
                    Shop
                  </h2>
                  <div>
                    <ul>
                      <li className="group  relative  duration-500  flex items-center  py-1 ">
                        <Link
                          href={"/collections/women"}
                          className="   duration-500 flex items-center  font-bold"
                        >
                          <div className=" group-hover:w-[20px] w-0 duration-500 overflow-hidden ">
                            <p className=" duration-500   w-[13px] h-[13px]  border-2  border-white  rounded-full"></p>
                          </div>
                          <span className=" text-[18px] lx:text-[22px]">
                            {" "}
                            Womens
                          </span>
                        </Link>
                      </li>
                      <li className="group  relative  duration-500  flex items-center py-1 ">
                        <Link
                          href={"/collections/men"}
                          className="   duration-500 flex items-center  font-bold"
                        >
                          <div className=" group-hover:w-[20px] w-0 duration-500 overflow-hidden ">
                            <p className=" duration-500   w-[13px] h-[13px]  border-2  border-white  rounded-full"></p>
                          </div>
                          <span className=" text-[18px] lx:text-[22px]">
                            Mens
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" pt-6">
                  <h2 className=" text-[18px] lx:text-[22px] font-bold opacity-70">
                    Contact Us
                  </h2>
                  <div>
                    <p className="text-[14px] md:text-[16px] opacity-70 uppercase py-1">
                      Bangladesh
                    </p>
                    <h1 className="md: text-[18px] lx:text-[22px] font-bold ">
                      1800 {websiteInfo?.name}
                    </h1>
                  </div>
                  <div>
                    <p className="text-[14px] md:text-[16px] opacity-70 uppercase py-1">
                      INTL
                    </p>
                    <h1 className="md: text-[18px] lx:text-[22px] font-bold flex items-center gap-2 ">
                      {" "}
                      <FaWhatsapp className=" text-[28px]  text-white" />{" "}
                      <span>1800 Talha Group</span>
                    </h1>
                  </div>
                  <div>
                    <p className="text-[14px] md:text-[16px] opacity-70 uppercase py-1">
                      Email
                    </p>
                    <h1 className="md: text-[18px] lx:text-[22px] font-bold flex items-center gap-2 ">
                      {" "}
                      hello@rollienation.com
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* small   Device  content */}
      <div className=" py-6 md:hidden">
        {/* contact section small  */}
        <div className="text-white  border-b py-3 border-white">
          <div
            onClick={() => setContact(!contact)}
            className="flex  justify-between items-center gap-2  cursor-pointer "
          >
            <h2 className="text-[17px] md:text-[18px]  font-medium opacity-70">
              Contact Us
            </h2>
            <div>{help ? <FiMinus size={20} /> : <LuPlus size={20} />}</div>
          </div>
          <Collapse isOpened={contact}>
            <div className=" pt-3 space-y-1 py-1">
              <h1 className="text-[16px] font-medium flex items-center gap-2 ">
                {" "}
                1800 {websiteInfo?.name} / 1800 765 543
              </h1>
              <h1 className="text-[16px] font-medium  flex items-center gap-2 ">
                {" "}
                <FaWhatsapp className="  text-[18px] lx:text-[22px]  text-white" />{" "}
                <span>1800 {websiteInfo?.name}</span>
              </h1>

              <h1 className="text-[16px] font-medium flex items-center gap-2 ">
                {" "}
                hello@rollienation.com
              </h1>
            </div>
          </Collapse>
        </div>
        {/* help section small  */}

        <div className="text-white  border-b py-3 border-white">
          <div
            onClick={() => setHelp(!help)}
            className="flex  justify-between items-center gap-2  cursor-pointer "
          >
            <h2 className="text-[17px] md:text-[18px]  font-medium opacity-70">
              Help
            </h2>
            <div>{help ? <FiMinus size={20} /> : <LuPlus size={20} />}</div>
          </div>
          <Collapse isOpened={help}>
            <div className=" pt-3">
              <ul>
                <li className=" ">
                  <Link href={"/"} className="">
                    <span className="text-[15px]"> My Account</span>
                  </Link>
                </li>
                <li className="">
                  <Link href={"/"} className="">
                    <span className="text-[15px]">Educator Offer</span>
                  </Link>
                </li>
                <li className=" ">
                  <Link href={"/"} className="">
                    <span className="text-[15px]">Shipping</span>
                  </Link>
                </li>
                <li className="">
                  <Link href={"/"} className="">
                    <span className="text-[15px]"> Student Offer</span>
                  </Link>
                </li>
                <li className="">
                  <Link href={"/"} className="">
                    <span className="text-[15px]"> Returns</span>
                  </Link>
                </li>
                <li className="">
                  <Link href={"/"} className="">
                    <span className="text-[15px]">
                      {" "}
                      {websiteInfo?.name} Rewards
                    </span>
                  </Link>
                </li>
                <li className="">
                  <Link href={"/"} className="">
                    <span className="text-[15px]"> Find a Store</span>
                  </Link>
                </li>
                <li className="">
                  <Link href={"/"} className="">
                    <span className="text-[15px]"> Contact Us</span>
                  </Link>
                </li>
                <li className="">
                  <Link href={"/"} className="">
                    <span className="text-[15px]"> International</span>
                  </Link>
                </li>
                <li className="">
                  <Link href={"/"} className="">
                    <span className="text-[15px]"> Terms & Conditions</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </div>
        <div className="text-white  border-b py-3 border-white">
          <div
            onClick={() => setShop(!shop)}
            className="flex  justify-between items-center gap-2  cursor-pointer "
          >
            <h2 className="text-[17px] md:text-[18px]  font-medium opacity-70">
              Shop
            </h2>
            <div>{shop ? <FiMinus size={20} /> : <LuPlus size={20} />}</div>
          </div>
          <Collapse isOpened={shop}>
            <div className=" pt-3">
              <ul>
                <li className=" ">
                  <Link href={"/"} className="">
                    <span className="text-[15px]"> Womens</span>
                  </Link>
                </li>
                <li className="">
                  <Link href={"/"} className="">
                    <span className="text-[15px]"> Mens</span>
                  </Link>
                </li>
                <li className=" ">
                  <Link href={"/"} className="">
                    <span className="text-[15px]"> Gift Card</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </div>
      </div>
      <div className="   py-2 md:hidden">
        <div className="  max-w-[500px]   -rotate-12 flex  flex-col justify-center items-center py-4">
          <h1 className="text-[80px]  md:text-[120px] lg:text-[170px]   py-0   leading-[100px] md:leading-[180px]   text-white font-extrabold">
            {websiteInfo?.name}
          </h1>
          <div className=" group flex items-center  justify-center gap-4 text-white md:gap-10">
            <Link href={"/"} className=" group-hover:opacity-100 opacity-90">
              {" "}
              <FaFacebookF size={22}></FaFacebookF>{" "}
            </Link>
            <Link href={"/"} className=" group-hover:opacity-100 opacity-90">
              {" "}
              <FaInstagram size={22}></FaInstagram>{" "}
            </Link>
            <Link href={"/"} className=" group-hover:opacity-100 opacity-90">
              {" "}
              <SiTiktok size={22}></SiTiktok>{" "}
            </Link>
            <Link href={"/"} className=" group-hover:opacity-100 opacity-90">
              {" "}
              <FaPinterest size={22}></FaPinterest>{" "}
            </Link>
          </div>
        </div>
      </div>
      <p className=" pt-10 md:pt-3 text-[13px] text-white md:text-[17px]">
        2024 {websiteInfo?.name}
      </p>
    </div>
  );
};

export default Footer;
