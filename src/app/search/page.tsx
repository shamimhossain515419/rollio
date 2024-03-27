
import SearchByProduct from '@/components/showProduct/SearchByProduct';
import React from 'react';
const Page = async ({ searchParams }: any) => {

    return (
        <>
            <div className='px-4 max-w-[1700px] mx-auto '>

                <div className="  w-full">
                    {/* show Product */}
                    <SearchByProduct keywords={searchParams?.product} />
                </div>
            </div>
        </>
    );
};

export default Page;