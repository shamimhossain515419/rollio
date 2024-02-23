"use client"
import { MenuToggle } from '@/redux/features/responsivemenutoggle/ResponsiveMenuToggleSlice';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from 'react-redux';

const Menucart = ({ item }: any) => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className=' py-2'>
            <div onClick={() => setActive(true)} className=' flex justify-between  items-center gap-3'>
                <h1 className='  capitalize text-[16px]  text-gray-800  font-medium'> {item?.name} </h1>
                <div>
                    <IoIosArrowForward size={16} />
                </div>
            </div>
            <div className={` ${active ? " block" : " hidden"} absolute top-2 bg-white w-full h-full pr-4 overflow-y-auto z-[1000]  `}>
                <div onClick={() => setActive(false)} className='flex cursor-pointer items-center opacity-70 justify-start'>
                    <IoIosArrowBack size={14} />
                    <p className='text-[17px] font-medium capitalize'> {item?.name} </p>

                </div>
                <div className=' pt-3'>
                    {
                        item?.subCategory?.map((item: any, index: number) => <Link onClick={() => dispatch(MenuToggle())} href={`/collections/${item}`} key={index} className=' py-2 block cursor-pointer'>
                            <div className=' flex justify-between  items-center gap-3'>
                                <h1 className='  capitalize text-[17px]  text-gray-800   font-medium'> {item} </h1>
                                <div>
                                    <IoIosArrowForward size={16} />
                                </div>
                            </div>

                        </Link>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Menucart;