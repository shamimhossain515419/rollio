import {
  addItem,
  deleteItem,
  removeItem,
} from "@/redux/features/cart/CartSlice";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

const CartComponents = ({ product }: any) => {
  const disparch = useDispatch();
  return (
    <div className=" py-2">
      <div className="  flex gap-1 md:gap-2 lg:gap-4 xl:gap-5 w-full">
        <div className="w-[100px]">
          <Image
            className=" rounded-xl w-[100px] "
            width={100}
            height={100}
            // src={product?.photos[0]}
            src={`https://getmicrojobs.com/images/${product?.photos[0]?.photo}`}
            alt="image"
          ></Image>
        </div>
        <div>
          <div>
            <h3 className="text-[17px] font-medium  text-black  ">
              {product.name}
            </h3>
            {/* <h3 className="text-[17px] font-medium  text-black ">
              Crinkle Patent/Black
            </h3> */}
            <p className="text-[15px] opacity-70">BLCK / LP / 42</p>
          </div>
          <div className=" border-b  border-black inline-block   pt-2">
            <div className=" flex items-center gap-3 md:gap-8">
              <button
                onClick={() => disparch(removeItem(product?.id))}
                className="text-[16px]  md:text-[20px] font-bold "
              >
                -
              </button>
              <p className="text-[16px]  md:text-[16px] font-medium ">
                {product.quantity}
              </p>
              <button
                onClick={() => disparch(addItem(product))}
                className="text-[16px]  md:text-[20px] font-bold "
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-between">
          <div className="  flex justify-end w-full  opacity-70  cursor-pointer">
            <IoClose
              onClick={() => disparch(deleteItem(product.id))}
              size={16}
            />
          </div>
          <div>
            <p>TK </p>
            <p>{product?.totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponents;
