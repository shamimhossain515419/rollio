"use client";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { SiteModalToggle } from "@/redux/features/sitemodal/SiteModalSlice";
import { accountToggle } from "@/redux/features/account/AccountSlice";
import Cookies from "js-cookie";
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status }: any = useSession();
  const dispatch = useDispatch();
  const data = Cookies.get("access-token");
  if (status == "loading") {
    return (
      <div className=" flex justify-center items-center min-h-[60vh]">
        <p className="text-[19px]  font-normal">Loading...</p>
      </div>
    );
  } else {
    if (!session?.user || !data) {
      return (
        <div className="max-full w-[500px] mx-auto h-screen flex items-center">
          {!session?.user && (
            <button
              onClick={() => {
                dispatch(SiteModalToggle());
                dispatch(accountToggle());
              }}
              className={`  bg-black py-2 text-center  w-full  px-3 opacity-75 hover:opacity-100 duration-200 mb-4 rounded-[40px] block `}
            >
              <span className="text-white text-[15px] lg:text-[18px] font-medium">
                Login OR Register
              </span>
            </button>
          )}
        </div>
      );
    }
    return <div>{children}</div>;
  }
};

export default PrivateRoute;
