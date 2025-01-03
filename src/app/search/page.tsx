import SearchByProduct from "@/components/showProduct/SearchByProduct";
import { Suspense } from "react";
export async function generateMetadata({searchParams}:any) {
  return {
    title: searchParams?.product + " || " + "  ClaraCasa",
    description: " ",
  };
}

const Page = async ({ searchParams }: any) => {
  return (
    <>
      <div className="px-4 max-w-[1700px] mx-auto ">
        <div className="  w-full">
          {/* show Product */}
          <Suspense fallback={<>Loading</>}>
            {" "}
            <SearchByProduct keywords={searchParams?.product} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Page;
