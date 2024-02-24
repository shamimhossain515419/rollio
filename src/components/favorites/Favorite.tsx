"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { FavoriteToggle } from "@/redux/features/favoriteToggle/favoriteToggle";
import FavortesCart from "./FavoritesCart";
import { SiteModalToggle } from "@/redux/features/sitemodal/SiteModalSlice";
import { accountToggle } from "@/redux/features/account/AccountSlice";

const FavoriteCart = () => {
  const { value } = useSelector((state: any) => state.favorite);
  const { favItems } = useSelector((state: any) => state.favItems);

  const dispatch = useDispatch();
  const favorite = true;

  return (
    <div className="">
      <div className=" md:py-6 overflow-hidden">
        <div className=" flex justify-between items-center gap-2">
          <div
            onClick={() => {
              dispatch(accountToggle()), dispatch(FavoriteToggle());
            }}
            className=" flex  cursor-pointer items-center gap-2"
          >
            <div>
              <IoIosArrowRoundBack className="" size={25} />
            </div>
            <h1 className="text-[17px]   md:text-[22px] text-black font-normal">
              Favorites{" "}
            </h1>
          </div>
          <div
            onClick={() => dispatch(SiteModalToggle())}
            className=" cursor-pointer p-1 bg-[#0908082e]  rounded-full"
          >
            <IoCloseOutline size={20} />
          </div>
        </div>
        <div className=" pt-6  max-h-[90vh] overflow-y-auto cartScroolbar">
          <div></div>
          <div>
            {favorite && (
              <div>
                <h1 className="text-[22px] font-normal text-gray-800">
                  {" "}
                  Colleations
                </h1>
                <div className=" my-3 border flex items-center justify-center p-8 rounded-md border-[#000000d8]">
                  <p className=" capitalize">not Collections yet</p>
                </div>
                <div>
                  <h1 className="text-[22px] font-normal text-gray-800">
                    All Favorites
                  </h1>

                  <div>
                    {favItems?.map((item: any) => (
                      <FavortesCart key={item.id} product={item} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {!favorite && (
              <div className="  h-full flex justify-center items-center flex-col min-h-[70vh]">
                <h1 className=" text-[18px] md:text-[28px]  text-center font-semibold py-2">
                  {"You don's have any favorites yet"}{" "}
                </h1>
                <p className="text-[14px]  md:text-[18px]  text-center text-gray-800">
                  {" "}
                  Top the heart on any product to save it to your favorites
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCart;
