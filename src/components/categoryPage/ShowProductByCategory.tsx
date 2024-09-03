"use client";
import Card from "../utilityComponent/card/Card";
import { useEffect, useState } from "react";
import { useGetProductByFilterMutation } from "@/redux/features/api/filtterProduct/filttterSlice";
import { useSelector } from "react-redux";
import { ProductInterface } from "@/types/Productinterface";

const ShowProductByCategory = ({ products }: any) => {
  const [filterProduct, setFilterProduct] = useState([]);

  const { colors } = useSelector((state: any) => state.Colors);
  const { sizes } = useSelector((state: any) => state.Sizes);

  const [getProductByFilter, { data, error, isLoading }] =
    useGetProductByFilterMutation();

  useEffect(() => {
    const value = {
      group_id: process.env.GROUP_ID,
      cat_id: 1,
      colors,
      sizes,
    };
    getProductByFilter(value);
    if (colors.length || sizes.length) {
      setFilterProduct(data?.data);
    } else {
      setFilterProduct(products?.data);
    }
  }, [colors, sizes, products, data?.data, getProductByFilter, setFilterProduct]);


  if (isLoading) {
    return <div>Loading........</div>;
  }
return (
    <div className=" grid  sm:grid-cols-2  lg:grid-cols-3  gap-4 md:gap-7">
      {filterProduct?.map((product: ProductInterface) => (
        <Card
          key={product.id}
          product={product}
          button={false}
          fav={true}
        ></Card>
      ))}
    </div>
  );
};

export default ShowProductByCategory;
