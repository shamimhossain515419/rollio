"use client";
import { useEffect, useState } from "react";
// import ReactStars from "react-rating-stars-component";

// import Button from "../button/Button";
import { useSession } from "next-auth/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import Cookies from "js-cookie";
// import { useCreateReviewMutation } from "@/redux/features/review/ReviewApi";
import toast from "react-hot-toast";

import Button from "@/components/utilityComponent/button/Button";
import { useCreateReviewMutation } from "@/redux/features/api/review/ReviewApi";
import { useSelector } from "react-redux";
const AddReview = ({ product_id }: any) => {
  const [ratings, setRating] = useState(1);
  const { data: section } = useSession();
  const [createReview, { data: createReviewResult, error, isSuccess }] =
    useCreateReviewMutation();
  const { user } = useSelector((state: any) => state?.auth);

  console.log(product_id);

  const handleReview = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const comment = form?.comment?.value;
    const data = {
      comment,
      rating: ratings,
      group_id: process.env.GROUP_ID,
      product_id: product_id,
      customer_id: user?.id,
      status: 0,
    };
    if (data) {
      createReview(data);
    }
  };
  useEffect(() => {
    if (createReviewResult && isSuccess) {
      toast.success(createReviewResult?.message);
    }
  }, [isSuccess, createReviewResult]);

  if (!section?.user) {
    return;
  }

  return (
    <div className="container mx-auto max-w-[1140px] ">
      <div className=" ">
        <p className=" uppercase font-medium text-3xl">Add a review</p>

        <form action="" onSubmit={handleReview} className=" py-5 ">
          {/* Your rating  */}
          <p className="font-normal">Your rating</p>
          {/* <ReactStars
            className={" text-wrap"}
            count={5}
            onChange={(e: any) => setRating(e)}
            size={30}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffc53e"
          /> */}
          <Rating
            style={{ maxWidth: 180 }}
            value={ratings}
            onChange={setRating}
          />
          <div className=" py-2">
            {/* your review  */}
            <textarea
              className="w-full h-32 px-4 py-2 border border-[#00000064] outline-0 rounded-md  "
              placeholder="Your review"
              name="comment"
            ></textarea>
          </div>

          <div className=" md:max-w-[20%] py-2">
            <Button title={"Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
