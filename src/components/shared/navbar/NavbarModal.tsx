"use client";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import "./navbarModal.css";
import { useEffect, useState } from "react";
import { PrimaryCategoryInterface } from "@/types/PrimaryCategoryInterface";
import { topCategoryInterface } from "@/types/CategoryInterface";

const behindCategory: String[] = ["About Us"];

const NavbarModal = ({
  activeModal,
  setActiveModal,
  topCategory,
  primaryCategories,
}: any) => {
  //
  const [primaryCategory, setPrimaryCategory] = useState<PrimaryCategoryInterface[]>([]);
  useEffect(() => {
    const myCategory = primaryCategories?.filter(
      (category: PrimaryCategoryInterface) => category?.top_category_id === activeModal
    );
    setPrimaryCategory(myCategory);
  }, [primaryCategories, activeModal]);
  console.log(topCategory);
  console.log(activeModal);


  console.log(primaryCategories);


  return (
    <div
      onClick={() => setActiveModal("")}
      className={` h-[100vh] ${activeModal ? "w-full" : " w-0 overflow-hidden"
        }  navbarmodal hidden    lg:block fixed top-0 left-0 bottom-0  right-0 `}
    >
      <div className="max-w-[600px] min-w-[250px] h-[700px] bg-white group  rounded-[50px] m-9  overflow-hidden">
        <div className=" w-full h-full  my-3 p-10  pb-10   overflow-y-scroll shadow-xl  overflow-hidden ">
          <div className=" flex  text-[#15151f42] justify-end">
            <IoCloseOutline className=" cursor-pointer text-[24px]"></IoCloseOutline>
          </div>
          <div className="  flex items-center gap-3  lg:gap-7 pt-2">
            {topCategory?.map((item: topCategoryInterface) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveModal(item.id)}
                className={`text-[18px] ${activeModal == item.id
                  ? "text-[#15151f] "
                  : "text-[#15151f42]"
                  } md:text-[20px]  hover:text-[#15151f] capitalize   font-medium`}
              // href={"/collections/women"}
              >
                {item?.name}
              </div>
            ))}

            <Link
              onMouseEnter={() => setActiveModal("Behind Rollie")}
              className={`text-[18px] ${activeModal == "Behind Rollie"
                ? "text-[#15151f] "
                : "text-[#15151f42]"
                } md:text-[20px] hover:text-[#15151f]  font-medium`}
              href={"/"}
            >
              Behind Rollio
            </Link>
          </div>

          <div className=" space-y-5 mt-7  overflow-hidden">
            {primaryCategory?.map((item: PrimaryCategoryInterface, index: number) => (
              <div key={index}>
                <Link
                  href={`/collections/${item.id}`}
                  className=" duration-300 md:text-[26px] hover:text-[#15151f] text-[#15151f42] font-bold"
                >
                  {" "}
                  {item?.primary_category_name}
                </Link>
              </div>
            ))}
            {/* {activeModal === "Men" &&
              menCategory?.map((item: String, index: number) => (
                <div key={index}>
                  <Link
                    href={`/collections/${item}`}
                    className=" duration-300 md:text-[26px] hover:text-[#15151f] text-[#15151f42] font-bold"
                  >
                    {" "}
                    {item}{" "}
                  </Link>
                </div>
              ))} */}
            {activeModal === "Behind Rollie" &&
              behindCategory?.map((item: String, index: number) => (
                <div key={index}>
                  <Link
                    href={`/page/${item === "About Us" && "about-us"}`}
                    className=" duration-300 md:text-[26px] hover:text-[#15151f] text-[#15151f42] font-bold"
                  >
                    {" "}
                    {item}{" "}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarModal;
