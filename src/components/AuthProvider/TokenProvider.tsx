"use client";
import { useFetchUserQuery } from "@/redux/features/auth/authApi";
import { userLoggedIn } from "@/redux/features/auth/authSlice";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";

const TokenProvider = ({ children }: any) => {
  const data = Cookies.get("access-token");
  const { data: userInfo, error } = useFetchUserQuery("a");
  const dispatch = useDispatch();
  dispatch(
    userLoggedIn({
      accessToken: data,
      user: userInfo?.data,
    })
  );

  return <div>{children}</div>;
};

export default TokenProvider;
