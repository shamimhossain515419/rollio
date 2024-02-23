"use client";
import { CartToggle } from "@/redux/features/cart/CartToggleSlice";
import Link from "next/link";
import { FaFirefox } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const CheckoutCart = () => {
  const dispatch = useDispatch();
  const { totalAmount } = useSelector((state: any) => state.Cart);

  return (
    <div className=" px-5 py-8   rounded-t-[30px] md:rounded-[35px]   bg-white z-50 shadow-md  ">
      <div className="text-center">
        <p className="text-[18px] text-black font-medium py-2">
          Subtotal: Tk {totalAmount}
        </p>
        <p className="text-[15px] text-gray-700 py-[2px]">
          You get free international express shipping on this order!
        </p>
        <div className="  px-2 sm:px-2 md::px-4 lg:px-14">
          <div className="bg-black py-3  w-full  px-3 hover:opacity-75 duration-200 my-4 rounded-[40px] ">
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
        <div className=" flex   justify-center gap-2 items-center">
          <p className="text-[17px] text-gray-700">
            Get an instant refund with
          </p>
          <p className=" flex items-center gap-2 text-black">
            {" "}
            <FaFirefox size={14} /> <span>Refundid</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
