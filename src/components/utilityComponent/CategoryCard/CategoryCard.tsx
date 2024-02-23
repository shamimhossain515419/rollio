import Image from "next/image";

const CategoryCard = () => {
  return (
    <div className="w-[530px] max-w-full overflow-hidden rounded-3xl relative">
      <div className="">
        <Image
          className="hover:scale-110 duration-300"
          src="https://www.rollienation.com/cdn/shop/files/Womens-mobile_550x.jpg?v=1657253928"
          width={500}
          height={500}
          layout="responsive"
          alt=""
        />
      </div>
      <div className="absolute bottom-10 left-10 ">
        <button className=" bg-white p-5 px-7 rounded-full hover:opacity-90 text-[20px] leading-none">
          Womens
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
