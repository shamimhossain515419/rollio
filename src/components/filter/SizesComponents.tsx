
"use client"
import { sizeitem } from "@/utility/filterItem";
import { useState } from "react";


const SizesComponents = () => {
    const [activeSize, setActiveSize] = useState<string>("")
    return (
        <div>
            <div className=" flex flex-wrap items-center gap-3">
                {
                    sizeitem?.map((item, index: number) => <div onClick={() => setActiveSize(item?.name)} className={` w-[100px] ${activeSize == item?.name ? "  border-[#000000d0]" : "  hover:border-[#000000d0] duration-200 border-[#0000003a]"} border border-[#0000003a] cursor-pointer  text-center overflow-hidden py-2 rounded-lg text-[17px] font-medium `} key={index}>
                        {item?.name} EU
                    </div>)
                }
            </div>
        </div>
    );
};

export default SizesComponents;