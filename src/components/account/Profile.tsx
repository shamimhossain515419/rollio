import React from "react";
import AccountLoginForm from "./accountLoginForm";
import { TiArrowRightThick } from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
const Profile = ({ setActive }: any) => {
  const { data: sesstion } = useSession();

  const handleSignOut = async () => {
    await signOut();
    Cookies.remove('access-token')
    toast.success("User signed out");
    window.location.reload();
  };

  return (
    <div>
      {!sesstion?.user && <AccountLoginForm></AccountLoginForm>}
      {!sesstion?.user && (
        <button
          onClick={() => setActive("register")}
          className={`  bg-black py-2 text-center  w-full  px-3 opacity-75 hover:opacity-100 duration-200 mb-4 rounded-[40px] block `}
        >
          <span className="text-white text-[15px] lg:text-[18px] font-medium">
            Register
          </span>
        </button>
      )}

      <div className=" ">
        {/* recently  viewed product  */}
        <div className=" py-2">
          <div>
            <div className=" group flex gap-2 items-center">
              <h1 className="text-[18px]  text-black font-medium ">
                Recently viewed
              </h1>
              <p className=" group-hover:translate-x-1 duration-500 p-[1px] rounded-full inline-block bg-[#86777745]">
                <IoIosArrowRoundForward size={20} />
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-3 py-5">
            <div className=" bg-[#86777745] p-2 rounded-[4px]">
              <FaUser className=" text-[15px]" />
            </div>
            <div>
              <p className="p-0 text-[13px]  font-medium">My information</p>
              <p className="p-0 text-[12px]  font-normal leading-3">
                {" "}
                {sesstion?.user?.email}{" "}
              </p>
            </div>
          </div>
          <div className=" flex   items-center justify-start gap-2  py-4   ">
            <div>
              <div className=" w-[80px] h-[90px] border border-[#8c81810d] overflow-hidden rounded-lg  ">
                <Link href={"/"}>
                  <Image
                    className="w-[80px] h-[90px]  "
                    width={100}
                    height={100}
                    src={
                      "https://cdn.shopify.com/s/files/1/0146/8461/8806/products/chelsea-black.jpg?v=1660538798&width=200"
                    }
                    alt="image"
                  ></Image>
                </Link>
              </div>
            </div>
            <div>
              <div className=" w-[80px]  h-[90px]  border border-[#8c81810d]  overflow-hidden rounded-lg  ">
                <Link href={"/"}>
                  <Image
                    className="w-[80px]  h-[90px]   "
                    width={100}
                    height={100}
                    src={
                      "https://cdn.shopify.com/s/files/1/0146/8461/8806/products/PS00001_PaceClassicWhite_Gum_H.jpg?v=1674779771&width=200"
                    }
                    alt="image"
                  ></Image>
                </Link>
              </div>
            </div>
            <div>
              <div className=" w-[80px]  h-[90px]  border border-[#8c81810d]  overflow-hidden rounded-lg  ">
                <Link href={"/"}>
                  <Image
                    className="w-[80px]  h-[90px]   "
                    width={100}
                    height={100}
                    src={
                      "https://cdn.shopify.com/s/files/1/0146/8461/8806/files/SC01451_KentuSafari_H.jpg?v=1705474917&width=200"
                    }
                    alt="image"
                  ></Image>
                </Link>
              </div>
            </div>
            <div>
              <div className=" w-[80px]  h-[90px]  border border-[#8c81810d]  overflow-hidden rounded-lg  ">
                <Link href={"/"}>
                  <Image
                    className="w-[80px]  h-[90px]   "
                    width={100}
                    height={100}
                    src={
                      "https://cdn.shopify.com/s/files/1/0146/8461/8806/products/chelsea-black.jpg?v=1660538798&width=200"
                    }
                    alt="image"
                  ></Image>
                </Link>
              </div>
            </div>
            <div>
              <div className=" w-[80px]  h-[90px]  border border-[#8c81810d]  overflow-hidden rounded-lg  ">
                <Link href={"/"}>
                  <Image
                    className="w-[80px]  h-[90px]   "
                    width={100}
                    height={100}
                    src={
                      "https://cdn.shopify.com/s/files/1/0146/8461/8806/products/chelsea-black.jpg?v=1660538798&width=200"
                    }
                    alt="image"
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Support  Links   */}

        <div className=" py-5">
          <h1 className="text-[20px]  font-medium py-2">Support</h1>
          <Link href={"/"} className=" flex items-center gap-2 py-1">
            <div className="text-[15px] font-medium ">Help center</div>
            <div className=" bg-[#5555555c]  rounded-[4px] inline-block p-[1px]">
              <TiArrowRightThick className="  -rotate-45" size={11} />
            </div>
          </Link>
          <Link href={"/"} className=" flex items-center gap-2 py-1">
            <div className="text-[15px] font-medium ">
              <Link href={"/page/faq"}>FAQ</Link>
            </div>
            <div className=" bg-[#5555555c]  rounded-[4px] inline-block p-[1px]">
              <TiArrowRightThick className="  -rotate-45" size={11} />
            </div>
          </Link>
          <Link href={"/"} className=" flex items-center gap-2 py-1">
            <div className="text-[15px] font-medium ">
              <Link href={"/page/contact"}>Contact us</Link>
            </div>
            <div className=" bg-[#5555555c]  rounded-[4px] inline-block p-[1px]">
              <TiArrowRightThick className="  -rotate-45" size={11} />
            </div>
          </Link>
        </div>
        {/* sign out button  */}

        {sesstion?.user && (
          <div onClick={handleSignOut} className="pt-5">
            <div className=" border border-[#00000059] rounded-3xl cursor-pointer  text-center py-3 px-1">
              <p>Sign out</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
