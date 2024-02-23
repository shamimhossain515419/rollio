"use client";
import CartCard from "@/components/cartPage/CartCard/CartCard";

import Newfind from "@/components/yourcart/Newfind";

import { FaFirefox } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { totalAmount } = useSelector((state: any) => state.Cart);
  return (
    <div className="-mt-64 min-h-[120vh] bg-cover bg-center bg-[url('https://www.rollienation.com/cdn/shop/files/cart-desktop_2000x.jpg?v=1655178665')]">
      <div className="container mx-auto pt-72 pb-10 ">
        <div className=" px-4">
          <div className="text-white">
            <h1 className="text-center md:text-[77px] text-[30px] font-bold ">
              Your Cart (2)
            </h1>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl max-h-screen overflow-y-scroll hide-scrollbar">
              {/* product Cart */}
              <CartCard />
            </div>

            <div className="grid grid-cols-1 gap-10">
              <div className=" bg-white p-10 rounded-3xl">
                <h2 className="text-lg  text-center">
                  Subtotal: Tk {totalAmount}
                </h2>
                <p className="py-5 text-[#9D9DA1] text-center">
                  Free express shipping on orders over $60 in AU & NZ
                </p>
                <div className="w-full">
                  <button
                    className="bg-[#15151f] w-full hover:bg-[#383849] text-white rounded-full px-8 py-4 duration-300 ease-in"
                    type="submit"
                  >
                    Checkout
                  </button>
                  <div className="flex items-center justify-center pt-5">
                    <p className="text-[#9D9DA1] ">
                      Get an instant refund with{" "}
                    </p>
                    <p className=" flex items-center gap-2 text-black">
                      <FaFirefox size={14} />
                      <span>Refundid</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <Newfind />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
