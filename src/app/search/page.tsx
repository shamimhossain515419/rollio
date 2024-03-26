import ShowProductByCategory from '@/components/categoryPage/ShowProductByCategory';
import Filter from '@/components/filter/Filter';
import ShowProduct from '@/components/searchProduct/ShowProduct';
import React from 'react';
const FetchData = async (id: string) => {
    const sizeColorRes = await fetch(
        process.env.BASE_URL + `/api/product/get-color-and-sizes`,
        {
            next: { revalidate: 300 },
        }
    );
    const sizeColorData = await sizeColorRes.json();
    return { sizeColorData };
};

const Page = async ({ searchParams }: any) => {
    const { sizeColorData } = await FetchData("1");
    const products: any = []
    return (
        <>
            <div className='px-4 max-w-[1700px] mx-auto '>
                <ShowProduct />
                <div className=" py-5  ">
                    {/* filter section  */}
                    <Filter sizeColorData={sizeColorData}></Filter>
                </div>

                <div>
                    {searchParams?.product}
                </div>
                <div className="  w-full">
                    {/* show Product */}
                    <ShowProductByCategory products={products} />
                </div>
            </div>
        </>
    );
};

export default Page;