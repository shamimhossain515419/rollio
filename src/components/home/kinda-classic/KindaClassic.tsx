import { kindaClassic } from '@/utility/kindaClassic';
import React from 'react';
import KindaClassicCart from './KindaClassicCart';
import KidaClassicSmall from './kidaClassicSmall';

const KindaClassic = () => {
    return (
        <div>
            <div className=' max-w-[1500px] mx-auto  px-4'>
                <div>
                    <h1 className=' text-[40px] md:text-[80px]  lg:text-[120px] xl:text-[180px]  leading-[100px] xl:leading-[180px]  text-center font-extrabold text-white py-4'>Meet a new kinda classic</h1>
                </div>

                <div className=' hidden  lg:block'>
                    <div className=' grid lg:grid-cols-3 gap-5 py-20'>
                        {/* KindaClassicCart  section    */}
                        <KindaClassicCart />
                        <KindaClassicCart />
                        <KindaClassicCart />
                    </div>
                </div>
                <div className=' block lg:hidden'>
                    <div className=' max-w-[800px] mx-auto'>
                        <KidaClassicSmall />
                        <KidaClassicSmall />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KindaClassic;