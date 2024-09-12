
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import AccountLoginForm from "./accountLoginForm";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { useGetRecentlyViewProductsQuery } from "@/redux/features/recentlyViewApi/recentlyViewApi";
import ModalCardWithSlider from "./ModalCardWithSlider";

const FavoriteForYour = () => {
  const { data: session } = useSession();
  const { recentlyViewedProducts } = useSelector(
    (state: any) => state.recentlyViewed
  );
  const { cartItems } = useSelector((state: any) => state.Cart);
  const { favItems } = useSelector((state: any) => state.favItems);

  const { data: recentlyViewProducts, error } = useGetRecentlyViewProductsQuery(
    recentlyViewedProducts
  );

  
  return (
    <div>
      <div>
        {/* account login from  */}
        {!session?.user && <AccountLoginForm></AccountLoginForm>}

        {/* recently  viewed product  */}
        <div className=" py-2">
          <div>
            <div className=" group flex gap-2 items-center">
              <h1 className="text-[18px]  text-black font-medium ">
                Recently viewed
              </h1>
              <p className=" group-hover:translate-x-1 duration-500 p-[1px] rounded-full inline-block bg-[#86777745]">
                <IoIosArrowRoundForward size={20} />
              </p>
            </div>
          </div>
          <div className="py-4">
            {recentlyViewProducts?.length ? (
              <ModalCardWithSlider
                products={recentlyViewProducts}
              />
            ) : (
              <p className="text-lg">Empty</p>
            )}
          </div>
        </div>
        {/* save from cart  product  */}
        <div className=" py-3">
          <div>
            <div className=" group flex gap-2 items-center">
              <h1 className="text-[18px]  text-black font-medium ">
                Save From Cart
              </h1>
              <p className=" group-hover:translate-x-1 duration-500 p-[1px] rounded-full inline-block bg-[#86777745]">
                <IoIosArrowRoundForward size={20} />
              </p>
            </div>
          </div>
          <div className="py-4">
            {cartItems?.length ? (
              <ModalCardWithSlider
              products={cartItems}
              />
            ) : (
              <p className="text-lg">Empty</p>
            )}
          </div>
        </div>
        {/* favorite cart product  */}
        <div className=" py-3">
          <div>
            <div className=" group flex gap-2 items-center">
              <h1 className="text-[18px]  text-black font-medium ">
                Favorites Cart
              </h1>
              <p className=" group-hover:translate-x-1 duration-500 p-[1px] rounded-full inline-block bg-[#86777745]">
                <IoIosArrowRoundForward size={20} />
              </p>
            </div>
          </div>
          <div className="py-4">
            {favItems?.length ? (
              <ModalCardWithSlider
              products={favItems}
              />
            ) : (
              <p className="text-lg">Empty</p>
            )}
          </div>
        </div>
        {/* popular product  */}
        {/* <div className=" py-3">
          <div>
            <div className=" group flex gap-2 items-center">
              <h1 className="text-[18px]  text-black font-medium ">
                Popular Today
              </h1>
              <p className=" group-hover:translate-x-1 duration-500 p-[1px] rounded-full inline-block bg-[#86777745]">
                <IoIosArrowRoundForward size={20} />
              </p>
            </div>
          </div>
          <div className=" flex   items-center justify-start gap-2  py-4   ">
            <div>
              <div className=" w-[80px] h-[90px] border border-[#8c81810d] overflow-hidden rounded-lg  ">
                <Link href={"/"}>
                  <Image
                    className="w-[80px] h-[90px]  "
                    width={100}
                    height={100}
                    src={
                      "https://cdn.shopify.com/s/files/1/0146/8461/8806/products/chelsea-black.jpg?v=1660538798&width=200"
                    }
                    alt="image"
                  ></Image>
                </Link>
              </div>
            </div>
            <div>
              <div className=" w-[80px]  h-[90px]  border border-[#8c81810d]  overflow-hidden rounded-lg  ">
                <Link href={"/"}>
                  <Image
                    className="w-[80px]  h-[90px]   "
                    width={100}
                    height={100}
                    src={
                      "https://cdn.shopify.com/s/files/1/0146/8461/8806/products/PS00001_PaceClassicWhite_Gum_H.jpg?v=1674779771&width=200"
                    }
                    alt="image"
                  ></Image>
                </Link>
              </div>
            </div>
            <div>
              <div className=" w-[80px]  h-[90px]  border border-[#8c81810d]  overflow-hidden rounded-lg  ">
                <Link href={"/"}>
                  <Image
                    className="w-[80px]  h-[90px]   "
                    width={100}
                    height={100}
                    src={
                      "https://cdn.shopify.com/s/files/1/0146/8461/8806/files/SC01451_KentuSafari_H.jpg?v=1705474917&width=200"
                    }
                    alt="image"
                  ></Image>
                </Link>
              </div>
            </div>
            <div>
              <div className=" w-[80px]  h-[90px]  border border-[#8c81810d]  overflow-hidden rounded-lg  ">
                <Link href={"/"}>
                  <Image
                    className="w-[80px]  h-[90px]   "
                    width={100}
                    height={100}
                    src={
                      "https://cdn.shopify.com/s/files/1/0146/8461/8806/products/chelsea-black.jpg?v=1660538798&width=200"
                    }
                    alt="image"
                  ></Image>
                </Link>
              </div>
            </div>
            <div>
              <div className=" w-[80px]  h-[90px]  border border-[#8c81810d]  overflow-hidden rounded-lg  ">
                <Link href={"/"}>
                  <Image
                    className="w-[80px]  h-[90px]   "
                    width={100}
                    height={100}
                    src={
                      "https://cdn.shopify.com/s/files/1/0146/8461/8806/products/chelsea-black.jpg?v=1660538798&width=200"
                    }
                    alt="image"
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FavoriteForYour;
