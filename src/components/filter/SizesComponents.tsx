"use client";
import { AddSize } from "@/redux/features/sizeSlice/sizeSlice";
import { SizeInterface } from "@/types/ColorAndSizeInterface";
import { useDispatch, useSelector } from "react-redux";

const SizesComponents = ({ sizesData }: { sizesData: SizeInterface }) => {
  const dispatch = useDispatch();
  const { sizes } = useSelector((state: any) => state.Sizes);

  return (
    <div>
      <div className=" flex flex-wrap items-center gap-3">
        {sizesData?.map((item: any, index: number) => {
          const isSelect: any = sizes.find(
            (size_id: number) => size_id === item.id
          );
          return (
            <div
              onClick={() => dispatch(AddSize(item.id))}
              className={` w-[100px] ${isSelect == item?.id
                ? "  border-[#000000d0] bg-slate-100 "
                : "  hover:border-[#000000d0] duration-200 border-[#0000003a]"
                } border border-[#0000003a] cursor-pointer  text-center overflow-hidden py-2 rounded-lg text-[17px] font-medium `}
              key={index}
            >
              {item?.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SizesComponents;
