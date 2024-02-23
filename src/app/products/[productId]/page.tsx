import ProductDetailPage from "@/components/productDetail/productDetailPage/ProductDetailPage";
import React from "react";

async function getData(id: string) {
  try {
    let product = await (
      await fetch(`${process.env.BASE_URL}product/get-product/${id}`, {
        next: { revalidate: 300 },
      })
    ).json();

    return { product };
  } catch (error) {
    console.log(error);
    return [];
  }
}

const page = async ({ params }: any) => {
  const { product }: any = await getData(params.productId);

  return (
    <div className="">
      <ProductDetailPage product={product} />
    </div>
  );
};

export default page;
