"use client";

import { CartToggle } from "@/redux/features/cart/CartToggleSlice";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import CartComponents from "./CartComponents";
import CheckoutCart from "./CheckoutCart";
import Newfind from "./Newfind";
import { ProductInterface } from "@/types/Productinterface";

const YourCart = () => {
  const { value } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const cartData = true;

  const { cartItems, totalQuantity } = useSelector((state: any) => state.Cart);

  return (
    <div
      className={` ${
        value
          ? " block animate-fadeInUp_card_key  "
          : " hidden animate-fadeOutDown_card_key"
      }      fixed top-0 left-0 right-0 blurBackground w-full h-screen  z-50   md:px-10 `}
    >
      <div className=" flex justify-center md:justify-end  items-center  md:items-start w-full">
        <div className=" w-full md:w-auto">
          <div className=" flex justify-between  flex-col gap-4  w-full  h-screen sm:h-[95vh]">
            <div className=" bg-white h-[100%]  md:w-[500px]  py-4 md:py-2    px-4  md:px-6 lg:p-10  shadow-md  rounded-b-[30px] md:rounded-[35px]  md:mt-20">
              {/* cart title and   section  */}
              <div className=" flex justify-between gap-3 items-center">
                <div></div>
                <Link
                  onClick={() => dispatch(CartToggle())}
                  href={"/cart"}
                  className="text-[14px] md:text-[20px] text-gray-800 font-semibold py-1"
                >
                  Your cart {cartItems?.length}
                </Link>
                <div
                  onClick={() => dispatch(CartToggle())}
                  className="   cursor-pointer"
                >
                  <IoClose size={18} />
                </div>
              </div>

              {cartData ? (
                <div className=" w-full max-h-[60vh] overflow-x-auto  cartScroolbar py-3 my-5 ">
                  {/* cart conpinent  */}

                  {cartItems.map((item: ProductInterface) => (
                    <CartComponents key={item.id} product={item} />
                  ))}
                </div>
              ) : (
                <div className=" py-4 text-center  min-h-[50vh]  md:px-10">
                  {/* cart respons  */}
                  <p className="text-[20px] md:text-[30px] font-medium text-black py-4">
                    {" "}
                    Your cart is empty!
                  </p>
                  <div className=" sm:px-2 md:px-10">
                    <div className="bg-black py-5 w-full px-10 hover:opacity-75 duration-200  my-4 rounded-[40px]">
                      <Link
                        onClick={() => dispatch(CartToggle())}
                        className="    text-white text-[15px] lg:text-[20px]  "
                        href={"/collections/wonen"}
                      >
                        Shop Womens
                      </Link>
                    </div>
                    <div className=" bg-black py-5  w-full px-10 hover:opacity-75 duration-200 my-4 rounded-[40px] ">
                      <Link
                        onClick={() => dispatch(CartToggle())}
                        className="   text-white text-[15px] lg:text-[20px]  "
                        href={"/collections/nen"}
                      >
                        Shop Mens
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              <div className="  px-2 sm:px-2 md::px-4 lg:px-14 ">
                <div className="bg-black py-3 text-center  w-full  px-3 hover:opacity-75 duration-200 my-4 rounded-[40px] ">
                  <Link
                    onClick={() => dispatch(CartToggle())}
                    href={"/checkout/information"}
                    className="   text-white text-[15px] lg:text-[22px] font-medium"
                  >
                    {" "}
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className=" W-full h-[33%]   sm:mt-7  max-w-[500px] min-h-[250px] z-40 md:w-[500px] sm:hidden 2xl:block overflow-hidden">
              <Newfind />
            </div>

            <div className=" h-[33%] ">
              <CheckoutCart></CheckoutCart>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCart;
