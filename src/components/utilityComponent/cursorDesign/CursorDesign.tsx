"use client"

import React, { useEffect, useState } from "react";
import './cursorDesing.css'
import { motion } from "framer-motion"
const CursorDesign = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  useEffect(() => {
    const handleCursor = (e: any) => {
      setX(e.clientX - 115)
      setY(e.clientY - 20)
    }
    window.addEventListener("mousemove", handleCursor);
    return () => {
      window.removeEventListener("mousemove", handleCursor)
    }

  }, [])

  return <div className=" p-3   absolute  top-2">
    {/* cursor animation  */}
    <motion.div animate={{
      x,
      y
    }} className=" border-4  w-[100px] md:w-[250px] md:h-[250px] h-[100px] rounded-full  flex justify-center items-center  border-[#fff]">
      <p className="text-[#fff] cursor-pointer  tracking-[2px] text-[16px] xl:text-[20px] font-semibold">Shop</p>
    </motion.div>
  </div>;
};

export default CursorDesign;
