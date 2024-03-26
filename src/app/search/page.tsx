import Filter from '@/components/filter/Filter';
import SearchByProduct from '@/components/showProduct/SearchByProduct';
import ShowProduct from '@/components/showProduct/ShowProduct';
import React from 'react';
const FetchData = async () => {
    const sizeColorRes = await fetch(
        process.env.BASE_URL + `/api/product/get-color-and-sizes`,
        {
            next: { revalidate: 300 },
        }
    );
    const sizeColorData = await sizeColorRes.json();
    return { sizeColorData, };
};

const Page = async ({ searchParams }: any) => {
    const { sizeColorData } = await FetchData();
    return (
        <>
            <div className='px-4 max-w-[1700px] mx-auto '>
                <ShowProduct />
                <div className=" py-5  ">
                    {/* filter section  */}
                    <Filter sizeColorData={sizeColorData}></Filter>
                </div>
                <div className="  w-full">
                    {/* show Product */}
                    <SearchByProduct keywords={searchParams?.product} />
                </div>
            </div>
        </>
    );
};

export default Page;