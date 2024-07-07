import Image from "next/image";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { MdOutlineClose } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { useNotifyCreateMutation } from "@/redux/features/notifyApi/notifyApi";

const SizeGuide = ({ product }: any) => {
  const [notifyModal, setNotifyModal] = useState(false);
  const [notify, setNotify] = useState(false);
  const [modal, setModal] = useState(false);
  const [notifyCreate, { isLoading }] = useNotifyCreateMutation();
  const onSubmit = async (data: any) => {
    try {
      const NewData = {
        ...data,
        product_id: product?.product?.id,
        group_id: process.env.GROUP_ID,
      };
      const res = await notifyCreate(NewData).unwrap();
      if (res?.message) {
        toast.success(res.message);
        setNotifyModal(false);
        setNotify(false);
      }
    } catch (err) {
      setNotifyModal(true);
      setNotify(true);
      setTimeout(() => {
        setNotifyModal(false);
        setNotify(false);
      }, 3000);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return !modal ? (
    <>
      <p
        onClick={() => setModal(!modal)}
        className="text-right underline text-sm cursor-pointer py-2"
      >
        Size guide
      </p>
    </>
  ) : (
    <>
      {!notifyModal && (
        <div className=" fixed top-0 left-0 h-screen max-w-full max-h-full w-[100vw] bg-[#0c0c0ca1] z-[100] flex items-center justify-center">
          <div className="bg-white  text-black max-w-full  w-[700px] p-5 rounded-2xl">
            <div className="flex justify-between">
              <h1 className="">SIZE GUIDE</h1>
              <MdOutlineClose
                onClick={() => setModal(false)}
                className="cursor-pointer"
                color="black"
                size={30}
              />
            </div>

            {/*product   */}
            <div className="grid grid-cols-3 py-5 gap-5">
              {/* image */}
              <div className="">
                <Image
                  width={200}
                  height={200}
                  src={`${process.env.BASE_URL}/images/${product?.photos[0]?.photo}`}
                  alt=""
                  layout="responsive"
                />
              </div>
              {/* content */}
              <div className=" col-span-2">
                <h1 className="text-xl font-semibold">
                  {product?.product?.name}
                </h1>
                <p>grain de poudre tailored trousers</p>

                <div className=" mt-5 bg-slate-100 p-2 rounded-md">
                  <h2 className="font-semibold">Fitting Information:</h2>
                  <p className="text-sm">
                    {product?.product?.meta_description}
                  </p>
                </div>
              </div>
            </div>

            {/* guide  */}
            <div className="mt-5">
              <div className="border-b">
                <h1 className="border-b-2 border-black inline-block ">
                  CONVERSION CHART
                </h1>
              </div>
              {/*  */}
              <div className="">
                <div className="grid grid-cols-3 text-center text-lg py-3">
                  <h1>Italy/France</h1>
                  <h1>Standard</h1>
                  <div className="">Price</div>
                </div>

                {/* sizes */}
                <div className="">
                  <div
                    onClick={() => setNotify(!notify)}
                    className="grid grid-cols-3 text-center p-1 bg-slate-200 rounded my-1 cursor-pointer"
                  >
                    <h1>40</h1>
                    <h1>XXXS</h1>
                    <div className=" relative">
                      {product?.product?.sale_price}
                      <FaArrowDown
                        className={`absolute top-1 right-2 duration-300 ${
                          notify && "rotate-180"
                        }`}
                      />
                    </div>
                  </div>

                  <Collapse isOpened={notify}>
                    <div className="flex justify-between items-center px-5 bg-stone-100 py-3">
                      <h1>Notify</h1>
                      <button
                        onClick={() => setNotifyModal(true)}
                        className="border-2 border-black rounded-md p-3"
                      >
                        Notify Me
                      </button>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* notify modal  */}
      {notifyModal && (
        <div className="fixed top-0 left-0 text-black h-screen max-w-full max-h-full w-[100vw] bg-[#0c0c0ca1] z-[100] flex items-center justify-center">
          <div className="bg-white max-w-full  w-[700px] p-5 rounded-2xl">
            <div className="flex justify-between">
              <h1 className="text-xl ">Notify Me</h1>
              <MdOutlineClose
                onClick={() => setNotifyModal(false)}
                className="cursor-pointer"
                color="black"
                size={30}
              />
            </div>

            <div className="grid grid-cols-3 py-5 gap-5">
              {/* image */}
              <div className="">
                <Image
                  width={200}
                  height={200}
                  src={`${process.env.BASE_URL}/images/${product?.photos[0]?.photo}`}
                  alt=""
                  layout="responsive"
                />
              </div>
              {/* content */}
              <form onSubmit={handleSubmit(onSubmit)} className=" col-span-2">
                <select
                  required
                  {...register("size")}
                  className="w-full border p-2 rounded focus:outline-none"
                >
                  {product?.sizes?.map((size: any, index: number) => (
                    <option key={index} className="p-5" value={size?.name}>
                      {size?.name}
                    </option>
                  ))}
                </select>
                <div className=" mt-5">
                  <input
                    required
                    type="email"
                    className="w-full border-2 p-2 rounded focus:outline-none"
                    {...register("customer_email_address", {
                      required: "Email address is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.customer_email_address && (
                    <span className="text-red-600 text-sm">
                      {errors.customer_email_address.message}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex gap-2">
                  <div className="">
                    <input
                      required
                      type="checkbox"
                      className="w-6 h-6 accent-black"
                    />
                  </div>
                  <div className="">
                    <p className="">
                      Want more FARFETCH in your inbox? Sign up for promotions,
                      tailored new arrivals and stock updates.
                    </p>
                    <p className="text-sm mt-2">
                      {product?.product?.meta_description}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end mt-3">
                  <button
                    disabled={isLoading}
                    className="border-2 text-white bg-black rounded-lg py-2 px-4"
                  >
                    {isLoading ? " loading " : "Email Me"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SizeGuide;
