
import { IoIosArrowForward } from "react-icons/io";
import ShippingAddress from "@/components/checkout/Shipping/ShippingAddress";
import Link from "next/link";
import ContactInfo from "@/components/checkout/ContactInfo/ContactInfo";

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
      <ContactInfo />
     
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
