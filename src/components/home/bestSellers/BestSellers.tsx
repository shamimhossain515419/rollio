import ProductsSlider from "@/components/shared/ProductsSlider/ProductsSlider";
// async function getData() {
//   let products = await (
//     await fetch(
//       `${process.env.BASE_URL}product/get-product-by-top-category/1`,
//       {
//         next: { revalidate: 300 },
//       }
//     )
//   ).json();
//   return { products };
// }

const BestSellers = async () => {
  // const data = await getData();

  return (
    <div>
      {/* <ProductsSlider products={data.products.products} title="Best Sellers" /> */}
    </div>
  );
};

export default BestSellers;
