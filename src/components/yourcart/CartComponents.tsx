import {
  addItem,
  deleteItem,
  removeItem,
} from "@/redux/features/cart/CartSlice";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

const CartComponents = ({ product }: any) => {
  const dispatch = useDispatch();
  return (
    <div className=" py-2 border-b border-gray-300">
      <div className="flex gap-2 justify-between md:gap-2 lg:gap-4 xl:gap-5 w-full">
        <div className="flex justify-start gap-2 md:gap-2 lg:gap-4 xl:gap-5">
        <div className="w-[100px]">
          <Image
            className=" rounded-xl w-[100px] "
            width={100}
            height={100}
            src={`${process.env.BASE_URL}/images/${product?.photos?.[0]?.photo}`}
            alt="image"
          ></Image>
        </div>
        <div>
          <div>
            <h3 className="text-[17px] capitalize font-medium  text-black  ">
              {product.name}
            </h3>
          </div>
          <div className=" border-b  border-[#000000a1] inline-block text-[#000000a1]   pt-2">
            <div className=" flex items-center gap-3 md:gap-8">
              <button
                onClick={() => dispatch(removeItem(product?.id))}
                className="text-[16px]  md:text-[20px] font-bold "
              >
                -
              </button>
              <p className="text-[16px]  md:text-[16px] font-medium ">
                {product.quantity}
              </p>
              <button
                onClick={() => dispatch(addItem(product))}
                className="text-[16px]  md:text-[20px] font-bold "
              >
                +
              </button>
            </div>
          </div>
        </div>
        </div>
      
        <div className=" flex flex-col items-end justify-between">
          <div className="  flex justify-end w-full  opacity-70  cursor-pointer">
            <IoClose className="text-[#000000be]"
              onClick={() =>
                dispatch(
                  deleteItem({  
                    id: product?.id,
                    extraIngredients: product?.extraIngredients,
                  })
                )
              }
              size={16}
            />
          </div>
          <div>
            <p className="text-[#02020296]">TK </p>
            <p className="text-[#020202dc]">{parseFloat(product?.totalPrice)?.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponents;
