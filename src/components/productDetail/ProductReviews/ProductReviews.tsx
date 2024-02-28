import { useGetReviewQuery } from "@/redux/features/api/review/ReviewApi";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ReviewCard from "./ReviewCard";
import ShowReviewCard from "./ShowReviewCard";

const ProductReviews = ({ product_id }: any) => {
  const { data: reviews } = useGetReviewQuery(product_id);
  // console.log(reviews.data);
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
      {reviews?.data?.map((review: any) => (
        <ShowReviewCard key={review} review={review} />
      ))}
    </div>
  );
};

export default ProductReviews;
