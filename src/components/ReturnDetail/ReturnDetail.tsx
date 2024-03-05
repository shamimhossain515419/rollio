import Image from "next/image";
import React from "react";

const ReturnDetail = () => {
  return (
    <div>
      <div className="">
        <div className="text-sm p-2 flex justify-between items-center shadow-sm">
          <div className="">Md Masdf</div>
          <div className="">
            <Image
              className="rounded-full border"
              src={
                "https://www.rollienation.com/cdn/shop/files/PS00022_PaceCrystal_H_1200x.jpg?v=1707821120"
              }
              width={50}
              height={50}
              alt=""
            />
          </div>
          <div className="">Qty: 10</div>
          <div className="">Price: 5000</div>
        </div>
      </div>
    </div>
  );
};

export default ReturnDetail;
