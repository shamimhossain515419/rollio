"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ProductDetailAccordion from "../productDetailAccordion/ProductDetailAccordion";
import ProductPhotoSlider from "../productPhotoSlider/ProductPhotoSlider";
import ProductReviews from "../ProductReviews/ProductReviews";
import ProductsSlider from "@/components/shared/ProductsSlider/ProductsSlider";
import ceoImage from "@/assets/image/ceo.webp";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/features/cart/CartSlice";
import toast from "react-hot-toast";
import AddReview from "../ProductReviews/AddReview";
import ReactPlayer from "react-player";
import SizeGuide from "./SizeGuide";
import { useGetRecentlyViewProductsQuery } from "@/redux/features/recentlyViewApi/recentlyViewApi";
import { addRecentlyViewedProduct } from "@/redux/features/recentlyView/recentlyViewSlice";
import { CartToggle } from "@/redux/features/cart/CartToggleSlice";
import { ProductInterface } from "@/types/Productinterface";
import { addFavItem } from "@/redux/features/favorite/favoriteSlice";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";

const ProductDetailPage = ({ product }: any) => {
  const dispatch = useDispatch();
  const [activeColor, setActiveColor] = useState("");
  const [activeSize, setActiveSize] = useState("");
  const { product: productInfo, colors, photos, sizes } = product;
  const { cartItems } = useSelector((state: any) => state.Cart);
  const existingProduct = cartItems?.find((p:any) => p?.id == productInfo?.id);
  const { favItems } = useSelector((state: any) => state.favItems);
  const alreadyFav = favItems.find(
    (fav: ProductInterface) => fav?.id === productInfo?.id
  );
  const addToCartHandle = (product: any) => {
    if (existingProduct) {
      dispatch(CartToggle());
      return;
    }
    if (!activeColor && colors.length) {
      toast.error("Select Color");
      return;
    }
    if (!activeSize && sizes.length) {
      toast.error("Select Size");
      return;
    }

    const values: any = {
      id: productInfo.id,
      name: productInfo.name,
      sale_price: parseFloat(productInfo.sale_price),
      discount: productInfo.discount,
      discount_type: productInfo.discount_type,
      color: activeColor,
      size: activeSize,
      extraIngredients: {
        size: activeSize,
        color: activeColor,
      },
      photos: photos,
    };
    dispatch(addItem(values));
    setActiveSize("");
    setActiveColor("");
  };
  const { recentlyViewedProducts } = useSelector(
    (state: any) => state.recentlyViewed
  );
  const filteredProductIds = recentlyViewedProducts.filter(
    (id: any) => id !== productInfo?.id
  );
  const { data: recentlyViewProducts, error } =
    useGetRecentlyViewProductsQuery(filteredProductIds);

  useEffect(() => {
    if (productInfo?.id && !recentlyViewedProducts?.includes(productInfo?.id)) {
      dispatch(addRecentlyViewedProduct(parseInt(productInfo?.id)));
    }
  }, [dispatch, productInfo, recentlyViewedProducts]);
  return (
    <>
      <div className="container mx-auto md:py-48 py-10">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-8 lg:gap-20 px-4 ">
          {/* product Images */}
          {/* product image Slider */}
          <div className="md:hidden block ">
            <ProductPhotoSlider photos={photos} />
          </div>

          <div className="md:block hidden xl:col-span-2 lg:col-span-1">
            <div className="grid grid-cols-2 gap-5">
              {productInfo?.video_url && (
                <div className=" rounded-3xl  overflow-hidden">
                  <ReactPlayer
                    width={`100%`}
                    height={`100%`}
                    muted
                    playing
                    loop
                    url={productInfo?.video_url}
                    config={{
                      youtube: {
                        playerVars: { showinfo: 0 },
                      },
                    }}
                  />
                </div>
              )}

              {photos.map((photo: any, i: number) => (
                <div key={i} className=" rounded-3xl  overflow-hidden">
                  <Image
                    src={`${process.env.BASE_URL}/images/${photo?.photo}`}
                    width={500}
                    height={500}
                    layout="responsive"
                    blurDataURL="blur"
                    placeholder="blur"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          {/* product info */}
          <div className="text-white">
            <h1 className="md:text-[48px] text-xl  capitalize leading-10 font-semibold pb-6">
              {productInfo?.name}
            </h1>
            <h2 className="text-2xl mb-7">TK {productInfo?.sale_price}</h2>
            <p className="text-xl">{productInfo?.meta_description}</p>
            {/* select color  */}
            {colors?.length ? (
              <div className="py-5">
                <h2 className="text-xl  ">Colors:</h2>

                <div className="flex gap-5 flex-wrap items-center  justify-start  mt-2">
                  {colors.map((color: any) => (
                    <div
                      key={color?.color_id}
                      onClick={() => setActiveColor(color?.color_id)}
                      className={`${
                        activeColor == color?.color_id && "border "
                      }  rounded-lg overflow-hidden  px-3 py-2   flex justify-center items-center`}
                    >
                      <div className="rounded-2xl ">
                        <p>{color?.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div> One Color </div>
            )}

            {/*  select sizes */}
            {product.sizes?.length ? (
              <div className="">
                <h1 className="text-xl pb-4">Sizes</h1>
                <div>
                  <div className="grid grid-cols-3 gap-4">
                    {product.sizes.map((size: any, i: number) => (
                      <div
                        onClick={() => setActiveSize(size.size_id)}
                        key={i}
                        className={`${
                          activeSize == size.size_id && "text-black bg-white"
                        } flex justify-center border rounded-lg px-3 py-2 q cursor-pointer `}
                      >
                        <p>{size.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div>One size</div>
            )}
            {/* Sizing Guide */}
            <div className="mt-5 flex items-center justify-center  cursor-pointer">
              {/* <p onClick={() => setSizeGuideModal(true)} className="border-b">
                Sizing Guide
              </p> */}
              <SizeGuide product={product} />
            </div>
            {/* add to Cart */}
            <div className=" flex items-center justify-start  gap-2 w-full">
              <div
                onClick={() => addToCartHandle(productInfo)}
                className=" flex items-center justify-center  w-[70%] cursor-pointer "
              >
                <button className="bg-[#15151f] hover:bg-[#383849] text-white w-full rounded-full px-8 py-4 duration-300 ease-in">
                  {" "}
                  {existingProduct ? "View cart" : "Add to Cart"}{" "}
                </button>
              </div>
              <div
                onClick={() => dispatch(addFavItem({ ...productInfo, photos }))}
                className={` ${
                  alreadyFav?.id ? " text-white" : "  "
                }  w-10 h-10  bg-black   flex items-center justify-center rounded-full cursor-pointer   duration-300 ease-in`}
              >
                {alreadyFav?.id ? (
                  <MdOutlineFavorite className="text-[18px]" />
                ) : (
                  <GrFavorite className="text-[18px]" />
                )}
              </div>
            </div>

            {/* Complete the look*/}
            <div className=" w-[385px] max-w-full rounded-3xl blurBackground my-10 p-5">
              <h1 className=" text-xl py-5">Complete the look</h1>
              <div className=" flex  gap-5">
                <Image
                  className="rounded-2xl"
                  src={`${process.env.BASE_URL}/images/${photos[0]?.photo}`}
                  width={100}
                  height={100}
                  alt=""
                />
                <div className=" flex flex-col justify-between ">
                  <h2 className="text-[16px] font-semibold">
                    {productInfo.name}
                  </h2>
                  <div className="blurBackground rounded-3xl p-3 flex items-center cursor-pointer">
                    <p>TK {productInfo.sale_price} Add Cart</p>{" "}
                    <IoIosArrowForward size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* accordion */}
            <div className="">
              <ProductDetailAccordion product={product} />
            </div>
          </div>
        </div>

        {/* Reviews */}
        <ProductReviews product_id={product.product.id} />
        <AddReview product_id={product.product.id} />

        {/* You Recently Viewed */}
        <ProductsSlider
          recentlyViewProducts={recentlyViewProducts}
          title="Recently Viewed"
        />
        {/* You might also like */}
        {/* <ProductsSlider title="You might also like" /> */}

        {/* ceo */}

        <div className="grid md:grid-cols-2 text-white md:gap-12 items-center px-4">
          <div className="">
            <h1 className="text-[48px] ">Vince Lebon</h1>
            <h2 className="text-xl">Founder & CEO</h2>
            <p className="text-xl py-5">
              Vince Lebon has been doing shoes for a long time. After a decade
              of designing for some of the biggest names in Aussie shoe brands,
              he felt like something was missing and thus, an idea was born. He
              wanted to create a comfortable, on-the-go shoe that felt just as
              good as looked. Through trial and error, a decade of learning —
              and relearning — weve perfected our craft. Our take on comfort is
              design-conscious. We take the latest technology and marry it with
              technical design to bring you a wearing experience like no other.
            </p>
          </div>
          <div className="">
            <Image
              className="border-[10px] rounded-3xl "
              src={ceoImage}
              width={500}
              height={500}
              lang="responsive"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* marquee */}
      <Marquee>
        <span className=" xl:text-[240px] md:text-[100px] text-[20px] flex gap-3 text-white">
          <span className="">Enemies of gravity</span>
          <span className="">Enemies of gravity</span>
          <span className="">Enemies of gravity</span>
          <span className="">Enemies of gravity</span>
        </span>
      </Marquee>

      <p className="text-[240px] "></p>

      {/* size guide modal */}

      {/* {sizeGuideModal && (
        <div className="fixed  z-50 w-screen h-screen blurBackground top-0 left-0 flex items-center justify-center">
          <div className="w-[800px] max-w-full p-5 bg-white rounded-2xl relative">
            <div
              onClick={() => setSizeGuideModal(false)}
              className="absolute top-2 right-2 z-50 cursor-pointer"
            >
              <IoClose />
            </div>
            <h2 className="lg:text-3xl font-bold py-3">
              Wave Mens Green/White Sizing
            </h2>
            <table className="w-full table-fixed 	max-w-full">
              <thead>
                <tr className="bg-black text-white">
                  <th>EU</th>
                  <th>US</th>
                  <th>Length</th>
                  <th>Width</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>41</td>
                  <td>7</td>
                  <td>276mm</td>
                  <td>70mm</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>7</td>
                  <td>276mm</td>
                  <td>70mm</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>7</td>
                  <td>276mm</td>
                  <td>70mm</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>7</td>
                  <td>276mm</td>
                  <td>70mm</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>7</td>
                  <td>276mm</td>
                  <td>70mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )} */}
    </>
  );
};

export default ProductDetailPage;
