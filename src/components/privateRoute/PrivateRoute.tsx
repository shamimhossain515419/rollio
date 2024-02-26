"use client";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import AccountLoginForm from "../account/accountLoginForm";
import { useDispatch } from "react-redux";
import { SiteModalToggle } from "@/redux/features/sitemodal/SiteModalSlice";
import { accountToggle } from "@/redux/features/account/AccountSlice";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { data: session }: any = useSession();
  const dispatch = useDispatch();
  if (!session?.user) {
    return (
      <div className="max-full w-[500px] mx-auto h-screen flex items-center">
        {!session?.user && (
          <button
            onClick={() => {
              dispatch(SiteModalToggle()), dispatch(accountToggle());
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
};

export default PrivateRoute;
