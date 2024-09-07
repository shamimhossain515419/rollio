"use client";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

const RegisterForm = ({ setActive }: any) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");

  // Email regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password validation
  const passwordValidation = (password: string) => {
    const lengthCheck = password.length >= 6;
    const uppercaseCheck = /[A-Z]/.test(password);
    const lowercaseCheck = /[a-z]/.test(password);
    const numberCheck = /[0-9]/.test(password);
    
    if (!lengthCheck) return "Password must be at least 6 characters long.";
    if (!uppercaseCheck) return "Password must contain at least one uppercase letter.";
    if (!lowercaseCheck) return "Password must contain at least one lowercase letter.";
    if (!numberCheck) return "Password must contain at least one number.";
    return true;
  };

  // Handle form submission
  const onSubmit = async (data: any) => {
    setLoading(true);

    const { name, email, password, confirmpassword } = data;

    if (password !== confirmpassword) {
      toast.error("Passwords do not match.");
      setLoading(false);
      return;
    }

    const payload = { name, email, password, group_id: process.env.GROUP_ID };

    try {
      const res = await fetch(`${process.env.BASE_URL}/api/register`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      const user = await res.json();

      if (user?.status === true) {
        setActive("for you");
        toast.success(`${user.message}`);
      } else {
        toast.error(`${user.message}`);
      }
    } catch (error) {
      toast.error("Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-[16px] md:text-[22px] font-medium py-1">Sign In</h1>
        <div className="w-full py-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-2">
              <input
                className="w-full border rounded-md border-[#000000c9] outline-0 py-3 px-3"
                placeholder="Enter Your name"
                type="text"
                {...register("name", { required: "Name is required" })}
              />
              {typeof errors.name?.message === "string" && (
                <p className="text-[14px] text-red-700">{errors.name.message}</p>
              )}
            </div>
            <div className="py-2">
              <input
                className="w-full border rounded-md border-[#000000c9] outline-0 py-3 px-3"
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: emailRegex,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {typeof errors.email?.message === "string" && (
                <p className="text-[14px] text-red-700">{errors.email.message}</p>
              )}
            </div>
            <div className="py-2">
              <input
                className="w-full border rounded-md border-[#000000c9] outline-0 py-3 px-3"
                placeholder="Enter password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  validate: passwordValidation,
                })}
              />
              {typeof errors.password?.message === "string"&& (
                <p className="text-[14px] text-red-700">{errors.password.message}</p>
              )}
            </div>
            <div className="py-2">
              <input
                className="w-full border rounded-md border-[#000000c9] outline-0 py-3 px-3"
                placeholder="Enter confirm password"
                type="password"
                {...register("confirmpassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {typeof errors.confirmpassword?.message === "string" && (
                <p className="text-[14px] text-red-700">
                  {errors.confirmpassword.message}
                </p>
              )}
            </div>
            <div className="bg-black py-2 text-center w-full px-3 opacity-75 hover:opacity-100 duration-200 my-4 rounded-[40px]">
              <button
                disabled={loading}
                type="submit"
                className="text-white text-[15px] lg:text-[18px] font-medium"
              >
                {loading ? "Loading..." : "Get Login"}
              </button>
            </div>
          </form>

          <div className="text-[19px] font-semibold text-gray-800 text-center">OR</div>
          <div>
            <p className="text-center text-gray-700">
              By signing in, you agree to our{" "}
              <Link className="underline hover:text-black" href={"/"}>
                privacy policy
              </Link>{" "}
              and{" "}
              <Link className="underline hover:text-black" href={"/"}>
                terms of service
              </Link>
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
