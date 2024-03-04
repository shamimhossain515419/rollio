"use client";
import Cookies from "js-cookie";

export const setCookie = (key: string, value: any) => {
  Cookies.set(key, value);
};
