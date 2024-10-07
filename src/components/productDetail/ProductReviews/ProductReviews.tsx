import { useGetReviewQuery } from "@/redux/features/api/review/ReviewApi";
import ShowReviewCard from "./ShowReviewCard";

const ProductReviews = ({ product_id }: any) => {
  const { data: reviews } = useGetReviewQuery(product_id);

  return (
    <div className="container mx-auto max-w-[1140px] md:mt-48 mt-10">

      {/* review Card */}
      {reviews?.data?.map((review: any) => (
        <ShowReviewCard key={review} review={review} />
      ))}
    </div>
  );
};

export default ProductReviews;
