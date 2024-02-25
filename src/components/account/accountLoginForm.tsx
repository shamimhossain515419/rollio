"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const AccountLoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res: any = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!res.error) {
      toast.success(`Login successful`);
      window.location.reload();
    } else {
      toast.error(`Login Fail`);
      // console.error("Login failed:", res.error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-[16px] md:text-[22px] font-medium py-1">
        Sign up or login for VIP early access, earn points & track orders
      </h1>
      <div className=" w-full  py-3">
        <input
          required
          onChange={(e) => setEmail(e.target?.value)}
          className=" w-full border rounded-md border-[#000000c9] outline-0  py-3 px-3"
          placeholder="E Email"
          type="email"
          name=""
          id=""
        />
        <input
          required
          onChange={(e) => setPassword(e.target?.value)}
          className=" w-full border rounded-md border-[#000000c9] outline-0   mt-2 py-3 px-3"
          placeholder=""
          type="password"
          name=""
          id=""
        />
        <div>
          {/* login code  */}
          <button
            disabled={loading}
            onClick={handleSubmit}
            className={`${
              loading && "cursor-wait"
            }  bg-black py-2 text-center  w-full  px-3 opacity-75 hover:opacity-100 duration-200 my-4 rounded-[40px] block `}
          >
            <span className="text-white text-[15px] lg:text-[18px] font-medium">
              {loading ? <span>Loading .....</span> : <span>Get Login</span>}
            </span>
          </button>
          {/* <div className="text-[19px] font-semibold text-gray-800 text-center">
            OR
          </div> */}
          {/* <div className="flex justify-center items-center border border-[#0000009d]  gap-4 py-2 text-center  w-full  px-3  duration-200 my-4 rounded-[40px] ">
            <FcGoogle size={24}></FcGoogle>{" "}
            <button className="text-[15px]  font-medium">
              {" "}
              Get Login Code{" "}
            </button>
          </div> */}
        </div>
        <div>
          <p className="text-centertext-gray-700">
            By signing in, you agree to our{" "}
            <Link className="underline hover:text-black" href={"/"}>
              {" "}
              privacy policy{" "}
            </Link>{" "}
            and{" "}
            <Link className="underline hover:text-black" href={"/"}>
              terms of service
            </Link>{" "}
          </p>
        </div>
        <div className="border border-[#0000001f] mt-4"></div>
      </div>
    </div>
  );
};

export default AccountLoginForm;
