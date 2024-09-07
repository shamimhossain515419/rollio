import ProductDetailPage from "@/components/productDetail/productDetailPage/ProductDetailPage";
import React from "react";

export async function generateMetadata( {params}:any) {
  try {
    let response = await fetch(
      `${process.env.BASE_URL}/api/product/get-product/${parseInt(params.productId)}`,
      {
        next: { revalidate: 30 },
      }
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch product with id: ${params.productId}`);
    }
    let product = await response.json();
    // Extract necessary fields for SEO
    const name = product?.product?.name + "  " +  " ClaraCasa" || "Product Details";
    const description =
      product?.product?.meta_description ||
      product?.product?.sort_description ||
      product?.product?.meta_key ||
      "Detailed view of the product.";
    const image =
      `${process.env.BASE_URL}/images/${product?.photos?.[0]?.photo}` ||
      "/default-image.jpg";
    const price = product?.product?.sale_price
      ? `$${product?.product?.sale_price}`
      : "Price not available";

    return {
      title: name,
      description: description,
      openGraph: {
        title: name,
        description: description,
        images: [
          {
            url: image,
            alt: name,
          },
        ],
        type: "website", // or "article", "object", etc.
        price: price,
      },
    };
  } catch (error) {
    console.error("Error fetching product metadata:", error);
    return {
      title: "Product Details",
      description: "Detailed view of the product.",
    };
  }
}

async function getData(id: string) {
  try {
    let response = await fetch(
      `${process.env.BASE_URL}/api/product/get-product/${parseInt(id)}`,
      {
        next: { revalidate: 30 },
      }
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch product with id: ${id}`);
    }
    let product = await response.json();
    return { product };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { product: null }; // Return product as null if fetch fails
  }
}

const page = async ({ params }: any) => {
  const { product }: any = await getData(params.productId);
  await generateMetadata(product);
  if (!product) {
    // Handle the case where product is null or undefined
    return (
      <div className="text-center text-red-500">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div>
      <ProductDetailPage product={product} />
    </div>
  );
};

export default page;
