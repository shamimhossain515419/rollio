import CursorDesign from "@/components/utilityComponent/cursorDesign/CursorDesign";
import Image from "next/image";

const Banner = ({ websiteInfo }: any) => {
  return (
    <div className="-mt-56 relative  overflow-hidden h-[120vh]">
      <div className=" relative  h-full">
        <Image
          // hidden md:block
          className="   object-cover bg-cover bg-center bg-no-repeat   object-center  relative h-full w-full"
          src={process.env.BASE_URL + "/images/" + websiteInfo?.banner}
          width={1000}
          height={1000}
          alt=""
        />
        <div className=" text-white absolute  z-10 top-1/2 px-4 xl:px-20 max-w-[570px]">
          {/* <p className="text-[14px] md:text-[17px]   uppercase tracking-[3px] ">
            {" "}
            pre-autumn Collactions{" "}
          </p> */}
          <h1 className="text-[24px] md:text-[42px] py-1 font-bold">
            {websiteInfo?.title}
          </h1>
          <p className="text-[15px] md:text-[20px] font-medium ">
            {websiteInfo?.sub_title}
          </p>
        </div>
        <CursorDesign></CursorDesign>
      </div>
    </div>
  );
};

export default Banner;
