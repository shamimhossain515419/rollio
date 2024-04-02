"use client";

import { useEffect, useState } from "react";
import { useGetProductByFilterMutation } from "@/redux/features/api/filtterProduct/filttterSlice";
import { useSelector } from "react-redux";
import { ProductInterface } from "@/types/Productinterface";
import SearchCart from "./SearchCart";
import ShowProduct from "./ShowProduct";

const SearchByProduct = ({ keywords }: any) => {
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
            setFilterProduct([]);
        }
    }, [colors, sizes, getProductByFilter]);

    useEffect(() => {
        if (keywords) {
            setFilterProduct([])
            const getData = async () => {
                const response = await fetch(`${process.env.BASE_URL}/api/search-product/${process.env.GROUP_ID}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        keywords: keywords
                    })
                });
                const productData = await response.json();
                if (productData) {
                    setFilterProduct(productData?.data)
                } else {
                    setFilterProduct([])
                }



            }
            getData()
        }

    }, [keywords, setFilterProduct])

    if (isLoading) {
        return <div>Loading........</div>;
    }

  
    return (
        <>

            <ShowProduct products={filterProduct} />
            <div className=" pt-10">
                {filterProduct?.length ? <div className=" grid  sm:grid-cols-2  lg:grid-cols-3  gap-4 md:gap-7">
                    {filterProduct?.map((product: ProductInterface) => (
                        <SearchCart
                            key={product.id}
                            product={product}
                            button={false}
                            fav={true}
                        ></SearchCart>
                    ))}
                </div> : <div className=" text-center py-20 ">

                    <h1 className="text-[22px] font">Product not Found </h1>
                </div>}


            </div>
        </>
    );
};

export default SearchByProduct;
