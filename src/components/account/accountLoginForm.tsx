"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import createAndSetCookie from "@/hooks/createAndSetCookie ";
const AccountLoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  // Using react-hook-form for handling form data and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  // Email and password validation using react-hook-form
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) || "Please enter a valid email";
  };

  const validatePassword = (password: string) => {
    return password.length >= 6 || "Password must be at least 6 characters long";
  };

  const onSubmit = async (data: { email: string; password: string }) => {
    const { email, password } = data;
    setLoading(true);

    try {
      const response = await fetch("https://dejavu.lifestyle/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log(result)

      if (result?.token) {
        const success = await createAndSetCookie(result?.token);
        if (success?.status == true) {
  
          const res = await signIn("credentials", {
            password,
            email,
            name: result?.name,
            redirect: false,
          });
          if (res?.ok) {
            setLoading(false);
            toast.success(result?.message);
            location.reload();
          }
        }
      } else {
        toast.error(result?.message);
        setLoading(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-[16px] md:text-[22px] font-medium py-1">
        Sign up or login for VIP early access, earn points & track orders
      </h1>
      <div className="w-full py-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: "Email is required", validate: validateEmail })}
            className="w-full border rounded-md border-[#000000c9] outline-0 py-3 px-3"
            placeholder="Email"
            type="email"
          />
          {typeof errors.email?.message === "string" && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          <input
            {...register("password", { required: "Password is required", validate: validatePassword })}
            className="w-full border rounded-md border-[#000000c9] outline-0 mt-2 py-3 px-3"
            placeholder="Password"
            type="password"
          />
          {typeof errors.password?.message === "string" && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}

          <div>
            <button
              disabled={loading}
              type="submit"
              className={`${
                loading && "cursor-wait"
              } bg-black py-2 text-center w-full px-3 opacity-75 hover:opacity-100 duration-200 my-4 rounded-[40px] block`}
            >
              <span className="text-white text-[15px] lg:text-[18px] font-medium">
                {loading ? "Loading ..." : "Get Login"}
              </span>
            </button>
          </div>
        </form>

        <div>
          <p className="text-center text-gray-700">
            By signing in, you agree to our{" "}
            <Link className="underline hover:text-black" href="/">
              privacy policy
            </Link>{" "}
            and{" "}
            <Link className="underline hover:text-black" href="/">
              terms of service
            </Link>
          </p>
        </div>
        <div className="border border-[#0000001f] mt-4"></div>
      </div>
    </div>
  );
};

export default AccountLoginForm;
