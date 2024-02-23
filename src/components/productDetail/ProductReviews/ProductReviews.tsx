import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductReviews = () => {
  return (
    <div className="container mx-auto max-w-[1140px] md:mt-48 mt-10">
      <div className="grid md:grid-cols-3 gap-5 bg-white p-4 rounded-3xl">
        <div className="border-r flex items-center gap-3">
          <div className="">
            <h2 className="text-[40px] font-bold">5.0</h2>
            <div className="flex items-center">
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
              <FaStar size={25} />
            </div>
          </div>
          <div className="">
            <p className="text-[#9d9da1] text-lg">
              Based on 3 <br /> reviews
            </p>
          </div>
        </div>
        {/* Quality */}
        <div className="flex flex-col justify-between">
          <h2 className="text-lg font-semibold">Quality</h2>
          <div className="">
            <div className="h-2 bg-black w-full rounded-2xl"></div>
            <div className="flex items-center justify-between text-[#9d9da1] text-[15px]">
              <p>Poor</p>
              <p>Excellent</p>
            </div>
          </div>
        </div>
        {/* Fit */}
        <div className="flex flex-col justify-between">
          <h2 className="text-lg font-semibold">Quality</h2>
          <div className="">
            <div className="h-2 bg-[#ceced3] w-full rounded-2xl relative">
              <div className="absolute left-0 top-0 w-full flex justify-center">
                <div className="h-2 w-2 bg-black  rounded-2xl"></div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[#9d9da1] text-[15px]">
              <p>Runs Small </p>
              <p>True</p>
              <p>Runs Large</p>
            </div>
          </div>
        </div>
      </div>

      {/* review Card */}
      <div className="grid md:grid-cols-3 gap-5 items-center bg-white p-10 rounded-3xl md:my-32 my-10">
        <div className="text-xl">
          <h1>Victoria J.</h1>
          <p className="text-[#9d9da1] py-2">Verified Buyer</p>
        </div>
        <div className="">
          <div className="flex items-center">
            <FaStar size={25} />
            <FaStar size={25} />
            <FaStar size={25} />
            <FaStar size={25} />
            <FaStar size={25} />
          </div>
          <div className="text-xl">
            <h1 className="py-5">Comfy!!!</h1>
            <p className="text-[#9d9da1] py-2">
              The Wave is super comfy, once you get it on. I have high arches &
              it was a battle getting them on, even with a shoe horn!
            </p>
          </div>
        </div>
        <div className="">
          <Image
            className="rounded-2xl"
            src={
              "https://cdn.shopify.com/s/files/1/0146/8461/8806/files/Rollie_Shot_47_WaveMGreen_White_1865_x800.jpg?v=1695262271"
            }
            width={300}
            height={300}
            layout="responsive"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
