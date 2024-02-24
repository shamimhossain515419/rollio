"use client";
import { productData } from "@/assets/damiData/damiData";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ProductDetailAccordion from "../productDetailAccordion/ProductDetailAccordion";
import { IoClose } from "react-icons/io5";
import ProductPhotoSlider from "../productPhotoSlider/ProductPhotoSlider";
import ProductReviews from "../ProductReviews/ProductReviews";
import ProductsSlider from "@/components/shared/ProductsSlider/ProductsSlider";
import ceoImage from "@/assets/image/ceo.webp";
import Marquee from "react-fast-marquee";
import Button from "@/components/utilityComponent/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/features/cart/CartSlice";
import toast from "react-hot-toast";

const ProductDetailPage = ({ product }: any) => {
  const dispatch = useDispatch();
  const [activeColor, setActiveColor] = useState();
  const [activeSize, setActiveSize] = useState();
  const [sizeGuideModal, setSizeGuideModal] = useState(false);

  const { product: productInfo, colors, photos, sizes } = product;

  const { cartItems } = useSelector((state: any) => state.Cart);
  const addToCartHandle = (product: any) => {
    if (!activeColor) {
      toast.error("Select Color");
      return;
    }
    if (!activeSize) {
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
      photos: photos,
    };
    dispatch(addItem(values));
  };

  //

  return (
    <>
      <div className="container mx-auto md:py-48 py-10">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 px-4 ">
          {/* product Images */}
          {/* product image Slider */}
          <div className="md:hidden block ">
            {/* <ProductPhotoSlider photos={product.images} /> */}
          </div>
          <div className="md:block hidden xl:col-span-2 lg:col-span-1">
            <div className="grid grid-cols-2 gap-5">
              {photos.map((photo: any, i: number) => (
                <div key={i} className=" rounded-3xl  overflow-hidden">
                  <Image
                    src={`https://getmicrojobs.com/images/${photo?.photo}`}
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
            <h1 className="md:text-[48px] text-xl font-semibold py-10">
              {productInfo.name}
            </h1>
            <h2 className="text-2xl mb-10">TK {productInfo.sale_price}</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              maiores vitae aliquam ea quia adipisci ad reprehenderit laborum
              distinctio. Neque asperiores quaerat distinctio voluptas
              voluptates ab ullam, vero non voluptate.
            </p>
            {/* colors */}
            <div className="py-10">
              <h2 className="text-xl mb-4 ">Colors</h2>
              <div className="flex gap-5 ">
                {/* {product.colors.map((color, i: number) => (
                  <div
                    key={i}
                    className={`${
                      activeColor == i && "p-2 border "
                    } rounded-2xl overflow-hidden w-[100px] h-[100px]`}
                  >
                    <Image
                      onClick={() => setActiveColor(i)}
                      className="rounded-2xl"
                      src={color.image}
                      width={90}
                      height={90}
                      alt=""
                    />
                  </div>
                ))} */}

                {colors.map((color: any) => (
                  <div
                    key={color?.id}
                    onClick={() => setActiveColor(color?.id)}
                    className={`${
                      activeColor == color?.id && "p-2 border"
                    } rounded-2xl overflow-hidden w-[60px] h-[60px] flex justify-center items-center`}
                  >
                    <div className="rounded-2xl ">
                      <p>{color?.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* sizes */}
            <div className="">
              <h1 className="text-xl pb-4">4 US in stock 3 left</h1>
              <div className="grid grid-cols-3 gap-4">
                {product.sizes.map((size: any, i: number) => (
                  <div
                    onClick={() => setActiveSize(size.id)}
                    key={i}
                    className={`${
                      activeSize == size.id && "text-black bg-white"
                    } flex justify-center border rounded-xl p-2 cursor-pointer `}
                  >
                    <p>{size.name}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Sizing Guide */}
            <div className="mt-5 flex items-center justify-center  cursor-pointer">
              <p onClick={() => setSizeGuideModal(true)} className="border-b">
                Sizing Guide
              </p>
            </div>
            {/* add to Cart */}
            <div
              onClick={() => addToCartHandle(productInfo)}
              className="mt-5 flex items-center justify-center  cursor-pointer w-full"
            >
              <Button title={"Add to Cart"} />
            </div>

            {/* Complete the look*/}
            <div className=" w-[385px] max-w-full rounded-3xl blurBackground my-10 p-5">
              <h1 className=" text-xl py-5">Complete the look</h1>
              <div className=" flex  gap-5">
                <Image
                  className="rounded-2xl"
                  src={`https://getmicrojobs.com/images/${photos[0]?.photo}`}
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

            {/* accrdion */}
            <div className="">
              <ProductDetailAccordion />
            </div>
          </div>
        </div>

        {/* Reviews */}
        <ProductReviews />
        {/* You Recently Viewed */}
        <ProductsSlider title="You Recently Viewed" />
        {/* You might also like */}
        <ProductsSlider title="You might also like" />

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
      {sizeGuideModal && (
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
      )}
    </>
  );
};

export default ProductDetailPage;
