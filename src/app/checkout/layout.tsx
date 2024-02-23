import ProductListPrice from "@/components/checkout/ProductListPrice/ProductListPrice";
import React from "react";

const layout = ({ children }: any) => {
  return (
    <div className="bg-white min-h-screen max-h-full">
      <div className="grid md:grid-cols-2 container mx-auto max-w-[1110px] py-5 gap-5 px-4">
        <div>{children}</div>
        {/* product list and Price */}

        <ProductListPrice />
      </div>
    </div>
  );
};

export default layout;
