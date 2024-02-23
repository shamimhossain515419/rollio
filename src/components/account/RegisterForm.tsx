"use client";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const RegisterForm = ({ setActive }: any) => {
  const [error, setError] = useState("");
  //    submit from
  const handleSumit = async (e: any) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form?.name.value;
    const email = form?.email.value;
    const password = form?.password.value;
    const confirmpassword = form?.confirmpassword.value;
    const data = { name, email, password };
    if (password === confirmpassword) {
      const res = await fetch(`https://getmicrojobs.com/api/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const user = await res.json();
      if (user?.status) {
        setActive("for you");
        toast.success(`${user.message}`);
      }
    } else {
      setError(" Password not match ");
    }
  };
  return (
    <div>
      <div>
        <h1 className="text-[16px] md:text-[22px] font-medium py-1">
          Sign In{" "}
        </h1>
        <div className=" w-full  py-3">
          <form action="" onSubmit={handleSumit}>
            <div className=" py-2">
              {/* Name  input   */}
              <input
                className=" w-full border rounded-md border-[#000000c9] outline-0  py-3 px-3"
                placeholder="Enter Your name"
                type="text"
                name="name"
                id=""
                required
              />
            </div>
            <div className=" py-2">
              {/* Email  input   */}
              <input
                className=" w-full border rounded-md border-[#000000c9] outline-0  py-3 px-3"
                placeholder="Enter your email"
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            <div className=" py-2">
              {/* password  input   */}
              <input
                className=" w-full border rounded-md border-[#000000c9] outline-0  py-3 px-3"
                placeholder="Enter password"
                type="password"
                name="password"
                id=""
                required
              />
            </div>
            <div className=" py-2">
              {/* Confirm password  input   */}
              <input
                className=" w-full border rounded-md border-[#000000c9] outline-0  py-3 px-3"
                placeholder="Enter confirm password"
                type="password"
                name="confirmpassword"
                id=""
                required
              />
            </div>
            {error && <p className="text-[14px]  text-red-700"> {error} </p>}
            {/* login code  */}
            <div className="bg-black py-2 text-center  w-full  px-3 opacity-75 hover:opacity-100 duration-200 my-4 rounded-[40px] ">
              <button
                type="submit"
                className="text-white text-[15px] lg:text-[18px] font-medium"
              >
                Submit
              </button>
            </div>
          </form>

          {/* other options  */}
          <div className="text-[19px] font-semibold text-gray-800 text-center">
            OR
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
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default RegisterForm;
