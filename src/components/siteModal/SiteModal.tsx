"use client";
import { useDispatch, useSelector } from "react-redux";
import FavoriteCart from "../favorites/Favorite";
import Account from "../account/Account";
const SiteModal = () => {
  // const { value } = useSelector((state: any) => state.favorite);
  const { sitemodal } = useSelector((state: any) => state.sitemodal);
  const { accountValue } = useSelector((state: any) => state.account);
  // const dispatch = useDispatch();

  return (
    <div
      className={` ${
        sitemodal
          ? " block animate-fadeInUp_favorite "
          : " animate-fadeOutDown_favorite hidden  "
      }      fixed top-0 left-0 right-0   blurBackground w-full h-screen   z-50   px-2 `}
    >
      <div className=" bg-white  max-w-[400px] md:w-[400px] h-[95vh]    !overflow-hidden  p-5  shadow-md rounded-[10px]  mt-4 md:my-4 relative">
        {accountValue == true ? (
          <Account></Account>
        ) : (
          <FavoriteCart></FavoriteCart>
        )}
      </div>
    </div>
  );
};

export default SiteModal;
