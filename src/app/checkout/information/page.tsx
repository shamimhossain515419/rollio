import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import ceoImage from "@/assets/image/ceo.webp";
import ShippingAddress from "@/components/checkout/Shipping/ShippingAddress";
import Link from "next/link";

const page = () => {
  return (
    <div className=" text-sm ">
      <div className="flex items-center text-stone-500">
        <Link href={"/cart"}>Cart</Link> <IoIosArrowForward />
        <Link href={"/checkout/information"}>Information</Link>{" "}
        <IoIosArrowForward />
        <Link href={"/checkout/shipping"}>Shipping</Link> <IoIosArrowForward />
        <Link href={"/checkout/payment"}>Payment</Link>
      </div>
      {/* contact */}
      <div className="my-5">
        <h2 className="text-lg">Contact</h2>
        <div className="flex gap-2 mt-2 ">
          {/* profile Image */}
          <div className="">
            <Image
              className=" rounded-md "
              src={ceoImage}
              width={50}
              height={50}
              alt=""
            />
          </div>
          {/* email and logout */}
          <div className="flex flex-col justify-between py-1">
            <p>mdmasude7@gmail.com</p>
            <p className="cursor-pointer">Logout</p>
          </div>
        </div>
      </div>
      <div className="py-3 flex  gap-2 ">
        <input className="p-1" type="checkbox" name="" id="email" />
        <label className="cursor-pointer" htmlFor="email">
          Email me with news and offers
        </label>
      </div>

      {/* Shipping address */}
      <ShippingAddress />
    </div>
  );
};

export default page;
