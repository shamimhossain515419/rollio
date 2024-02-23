"use client"

import { styleitem } from '@/utility/filterItem';
import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";

const StyleComponents = () => {
    const [activeStyle, setActiveStyle] = useState<number>();
    return (
        <div>
            <div className='  grid grid-cols-2 gap-1  max-h-[400px] overflow-y-auto'>
                {
                    styleitem?.map((item, index: number) => <div onClick={() => setActiveStyle(index)} className=' cursor-pointer flex items-center gap-4 py-2' key={index}>
                        <div className={`w-[25px] ${activeStyle == index ? " bg-black" : " "} h-[25px] rounded-full border border-[#000000c7] flex justify-center items-center`}>
                            {activeStyle == index ? <FaCheck className='text-white' size={16} /> : null}

                        </div>
                        <h1 className='text-[17px] font-normal  '> {item?.name} </h1>

                    </div>)
                }
            </div>
        </div>
    );
};

export default StyleComponents;