import { filterItem, sortbyProduct } from "@/utility/filterItem";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import { IoCloseOutline } from "react-icons/io5";
import ColorsComponents from "./ColorsComponents";
import TypeComponents from "./TypeComponents";
import StyleComponents from "./StyleComponents";
import SizesComponents from "./SizesComponents";

const Filter = () => {
    const [sort, setSort] = useState({ id: 2, name: "Featured" });
    const [activeSort, setActiveSort] = useState(false);
    const [activeModal, setActiveModal] = useState("");


    return (
        <div className=" relative  hidden lg:block">
            <div className=" flex justify-between items-center gap-3 ">
                <div className=" flex flex-row items-center gap-3 ">
                    {
                        filterItem?.map(item => <div onClick={() => setActiveModal(item?.name)} className="  flex  items-center gap-1 cursor-pointer border px-6  py-3 rounded-[45px]  border-[#fff]  text-white " key={item?.id}>
                            <h1 className=" md:text-[18px] capitalize  font-medium"> {item?.name} </h1>
                            <RiArrowDropDownLine size={18} />
                        </div>)
                    }
                </div>
                <div>

                    {/* sort by  prodcut  */}
                    <div onClick={() => setActiveSort(!activeSort)} className=" cursor-pointer  flex  items-center gap-1 border px-6  py-3 rounded-[45px]  border-[#fff]  text-white ">
                        <h1 className="text-[15xp] md:text-[20px]  font-medium">Sort by: {sort?.name} </h1>
                        <RiArrowDropDownLine size={18} />
                    </div>
                    <div className={` ${activeSort ? "  block" : " hidden"} bg-white  lg:min-w-[250px] top-16 absolute z-50 text-black py-4 px-8 rounded-2xl shadow-2xl`}>
                        {/* sort options list  */}
                        <div>
                            {
                                sortbyProduct?.map((item: any, idnex: number) => <div onClick={() => { setSort(item), setActiveSort(false) }} key={idnex} className={` text-[18px] font-medium md:text-[20px] cursor-pointer  py-1 group  `}>
                                    <span className={` ${sort?.name == item?.name ? "border-b-2" : ""} group-hover:border-b-2 border-black p pb-1  w-full`}>{item?.name}</span>
                                </div>)
                            }
                        </div>

                    </div>
                </div>
            </div>
            {/* filter  modal  */}
            <div className=" ">
                <div className={` ${activeModal ? " block" : " hidden"} fixed    w-full h-screen top-0 left-0   blurBackground z-50  p-10`}>
                    <div className="    w-[550px] bg-white relative rounded-3xl p-8 ">
                        <div className=" flex flex-row items-center gap-6 ">
                            {
                                filterItem?.map(item => <div onClick={() => setActiveModal(item?.name)} className={` ${activeModal == item?.name ? "opacity-100" : " opacity-60"}  flex  items-center  cursor-pointer  py-3 rounded-[45px]   text-black`} key={item?.id}>
                                    <h1 className="text-[25px] capitalize font-medium"> {item?.name} </h1>

                                </div>)
                            }
                        </div>
                        {/* close modal icon  */}
                        <div onClick={() => setActiveModal("")} className=" absolute top-1 right-3 p-6 cursor-pointer">
                            <IoCloseOutline size={24}></IoCloseOutline>
                        </div>
                        <div className=" py-4">
                            {activeModal == "colors" && <ColorsComponents></ColorsComponents>}
                            {activeModal == "types" && <TypeComponents></TypeComponents>}
                            {activeModal == "size" && <SizesComponents></SizesComponents>}
                            {activeModal == "style" && <StyleComponents></StyleComponents>}



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;