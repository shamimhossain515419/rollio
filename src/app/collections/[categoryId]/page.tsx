import ShowProductByCategory from "@/components/categoryPage/ShowProductByCategory";
import Filter from "@/components/filter/Filter";
import Image from "next/image";
import Link from "next/link";

const FetchData = async (id: string) => {
  console.log(id);
  const res = await fetch(
    process.env.BASE_URL +
      `/api/product/get-product-by-category/${process.env.GROUP_ID}/${id}`,
    {
      next: { revalidate: 300 },
    }
  );
  const products = await res.json();

  const sizeColorRes = await fetch(
    process.env.BASE_URL + `/api/product/get-color-and-sizes`,
    {
      next: { revalidate: 300 },
    }
  );
  const sizeColorData = await sizeColorRes.json();

  return { products, sizeColorData };
};

const Page = async ({ params }: any) => {
  const { products, sizeColorData } = await FetchData(params.categoryId);

  return (
    <div className="px-4 max-w-[1700px] mx-auto ">
      <div className="  w-full  pt-6">
        <div className="">
          <div className=" py-10">
            {/* section title  */}
            <p className="text-[20px] tracking-[2px] text-white font-medium uppercase text-center">
              {" "}
              {params.categoryId}
            </p>
            <h1 className="text-[25px]  md:text-[40px]  xl:text-[60px]  2xl:text-[80px] font-bold text-white text-center">
              Every style, for any day
            </h1>

            {/* QUICK LINKS section  */}
            <div className=" py-7">
              {/* quick link  title */}
              <h1 className="text-[17px] tracking-[2px] text-white font-medium uppercase text-center">
                Quick Links{" "}
              </h1>

              {/* {quick link cart } */}
              <div className="flex  flex-wrap  items-center justify-center gap-5 md:gap-14  py-9">
                <Link href={"/collections/derby"}>
                  <div className="border border-white p-2 rounded-full">
                    <Image
                      className=" w-[110px] h-[110px] transform    translate-y-0 hover:-translate-y-3 duration-200"
                      width={100}
                      height={100}
                      src={
                        "https://cld.accentuate.io/94168776758/1659924234649/whitederby-1.png?v=1659924825676&options=w_130"
                      }
                      alt="image"
                    ></Image>
                  </div>
                  <p className="text-[14px]  md:text-[20px] text-white  text-center font-normal  py-3">
                    Derby
                  </p>
                </Link>
                <Link href={"/collections/Sneakers"}>
                  <div className="border border-white p-2 rounded-full">
                    <Image
                      className=" w-[110px] h-[110px] transform    translate-y-0 hover:-translate-y-3 duration-200"
                      width={100}
                      height={100}
                      src={
                        "https://cld.accentuate.io/94168776758/1659924336064/flat-1.png?v=1659924866422&options=w_130"
                      }
                      alt="image"
                    ></Image>
                  </div>
                  <p className="text-[14px]  md:text-[20px] text-white  text-center font-normal  py-3">
                    Sneakers
                  </p>
                </Link>
                <Link href={"/collections/flats"}>
                  <div className="border border-white p-2 rounded-full">
                    <Image
                      className=" w-[110px] h-[110px] transform    translate-y-0 hover:-translate-y-3 duration-200"
                      width={100}
                      height={100}
                      src={
                        "https://cld.accentuate.io/94168776758/1659924234649/whitederby-1.png?v=1659924825676&options=w_130"
                      }
                      alt="image"
                    ></Image>
                  </div>
                  <p className="text-[14px]  md:text-[20px] text-white  text-center font-normal  py-3">
                    Flats
                  </p>
                </Link>
                <Link href={"/collections/Sendals"}>
                  <div className="border border-white p-2 rounded-full">
                    <Image
                      className=" w-[110px] h-[110px] transform    translate-y-0 hover:-translate-y-3 duration-200"
                      width={100}
                      height={100}
                      src={
                        "https://cld.accentuate.io/94168776758/1659924894443/sandal-1.png?v=1659924894443&options=w_130"
                      }
                      alt="image"
                    ></Image>
                  </div>
                  <p className="text-[14px]  md:text-[20px] text-white  text-center font-normal  py-3">
                    Sendals
                  </p>
                </Link>
                <Link href={"/collections/Boots"}>
                  <div className="border border-white p-2 rounded-full">
                    <Image
                      className=" w-[110px] h-[110px] transform    translate-y-0 hover:-translate-y-3 duration-200"
                      width={100}
                      height={100}
                      src={
                        "https://cld.accentuate.io/94168776758/1660091187883/bootwhite-1-(1).png?v=1660091187883&options=w_130"
                      }
                      alt="image"
                    ></Image>
                  </div>
                  <p className="text-[14px]  md:text-[20px] text-white  text-center font-normal  py-3">
                    Boots
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className=" py-5  ">
            {/* filter section  */}
            <Filter sizeColorData={sizeColorData}></Filter>
          </div>

          <div className="  w-full">
            {/* show Product */}
            <ShowProductByCategory products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
