"use client";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import ceoImage from "@/assets/image/ceo.webp";
import ShippingAddress from "@/components/checkout/Shipping/ShippingAddress";
import Button from "@/components/utilityComponent/button/Button";
import ProductListPrice from "@/components/checkout/ProductListPrice/ProductListPrice";

const page = () => {
  return (
    <div className="bg-white min-h-screen max-h-full">
      <div className="grid grid-cols-2 container mx-auto max-w-[1110px] py-5 gap-5">
        {/* product list and Price */}
      </div>
    </div>
  );
};

export default page;
