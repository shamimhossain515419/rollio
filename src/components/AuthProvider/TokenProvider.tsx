"use client"
import { userLoggedIn } from "@/redux/features/auth/authSlice";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";


const TokenProvider = ({ children }: any) => {
    const data = Cookies.get('access-token');
    const dispatch = useDispatch();
    dispatch(userLoggedIn({
        accessToken: data,

    }))
    return (
        <div>
            {children}
        </div>
    );
};

export default TokenProvider;