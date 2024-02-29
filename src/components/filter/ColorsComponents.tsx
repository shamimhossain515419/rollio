import { ColorSelected } from "@/redux/features/colorsSlice/ColorsSlice";
import { ColorInterface, Colors } from "@/utility/filterItem";
import { useDispatch } from "react-redux";


const ColorsComponents = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="flex items-center flex-wrap gap-7 ">
                {
                    Colors?.map((color: ColorInterface, i: number) => {
                        return <div onClick={() => dispatch(ColorSelected(color?.id))} key={i} className=" group">
                            <div className="group-hover:border  w-[70px]  flex justify-center items-center   h-[70px]  border-[#000000e4] rounded-xl ">
                                <div className={` w-[70px] group-hover:h-[60px]  group-hover:w-[60px] duration-300 ${color?.color_code}  h-[70px]   rounded-xl cursor-pointer transform `}>

                                </div>
                            </div>
                            <h1 className="text-center text-[18px] py-1">{color?.name}</h1>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default ColorsComponents;