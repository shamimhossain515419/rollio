"use client";
import { SiteModalToggle } from "@/redux/features/sitemodal/SiteModalSlice";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import FavoriteForYour from "./FavoriteForYour";
import { useState } from "react";
import Orders from "./Orders";
import Profile from "./Profile";
import { accountToggle } from "@/redux/features/account/AccountSlice";
import RegisterForm from "./RegisterForm";
import EditProfile from "./EditProfile/EditProfile";
const accountItem = [
  {
    id: 1,
    name: "for you",
  },
  {
    id: 2,
    name: "orders",
  },
  {
    id: 3,
    name: "profile",
  },
];
const Account = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("profile");
  return (
    <div className=" relative  overflow-hidden ">
      <div className=" md:py-6 overflow-hidden relative">
        <div className=" flex justify-between items-center gap-2">
          <div className=" group  flex  items-center gap-2 cursor-pointer">
            <h1 className="text-[17px]  capitalize  md:text-[22px] text-black font-normal">
              {active === "for you" ? "Welcome" : active}
            </h1>
          </div>
          <div
            onClick={() => {
              dispatch(SiteModalToggle()), dispatch(accountToggle());
            }}
            className=" cursor-pointer p-1 bg-[#0908082e]  rounded-full"
          >
            <IoCloseOutline size={20} />
          </div>
        </div>
        <div className=" pt-6  max-h-[80vh] overflow-y-auto cartScroolbar">
          {active === "for you" && <FavoriteForYour />}
          {active === "orders" && <Orders />}
          {active === "profile" && <Profile setActive={setActive} />}
          {active === "register" && <RegisterForm setActive={setActive} />}
          {active === "edit-profile" && <EditProfile />}
        </div>
      </div>
      <div className=" fixed  left-2 bottom-[30px]  max-w-[400px] h-[70px] w-full bg-white  md:w-[400px] rounded-[10px] overflow-hidden">
        <div className="      h-full border-t-[1.5px] border-[#0000005e]  flex items-start justify-between gap-3 text-black  bg-white  overflow-hidden">
          {accountItem?.map((item: any, index: number) => (
            <div
              className={` ${
                active == item?.name
                  ? " border-t-[2px] border-[#3357fa]  z-40 opacity-100 "
                  : " opacity-70   "
              } text-center pt-2  w-full`}
              onClick={() => setActive(item?.name)}
              key={index}
            >
              <button className="text-[15px] pt-3 md:text-[17px] font-normal capitalize  ">
                {" "}
                {item?.name}{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
