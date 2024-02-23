"use client";
import { menuInterface, menuItems } from "@/assets/damiData/damiData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { GrFavorite } from "react-icons/gr";
import { CiMenuBurger, CiUnlock } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import NavbarModal from "./NavbarModal";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { MenuToggle } from "@/redux/features/responsivemenutoggle/ResponsiveMenuToggleSlice";
import { CartToggle } from "@/redux/features/cart/CartToggleSlice";
import { FavoriteToggle } from "@/redux/features/favorites/FavoriteSlice";
import { SiteModalToggle } from "@/redux/features/sitemodal/SiteModalSlice";
import { accountToggle } from "@/redux/features/account/AccountSlice";

const Navbar = ({ topCategory, primaryCategories }: any) => {
  const [activeCountyList, setActiveCountryList] = useState(false);
  const [activeSearchBtn, setActiveSearchBtn] = useState(false);
  const [activeModal, setActiveModal] = useState<Number>();
  const [showdropdown, setShowdropdown] = useState(false);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: any) => state.Cart);

  const [country, setCountry] = useState({
    name: "BDT",
    sumsymbole: "৳",
    image: "https://flagcdn.com/h40/bd.png",
  });

  // scrool
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`xl:mx-20 rounded-full px-8 py-2 z-50 sticky top-5 transition-all  ${
        scrolled ? "bg-white text-black" : "text-white"
      } `}
    >
      <div className="flex justify-between items-center">
        {/* nav items */}
        <div className=" tracking-[2px]">
          {/* responsive bar start */}
          <div className="flex xl:hidden items-center gap-2">
            <CiMenuBurger
              onClick={() => dispatch(MenuToggle())}
              size={25}
              className="cursor-pointer"
            />
            <IoSearch size={25} className="cursor-pointer" />
          </div>
          {/*  responsive bar end */}
          <ul className="xl:flex hidden  items-center gap-10">
            {topCategory.map((item: menuInterface) => (
              <li
                onClick={() => setActiveModal(item?.id)}
                key={item.id}
                className="text-xl  cursor-pointer"
              >
                {item.name}
              </li>
            ))}

            <li className="text-xl">
              <Link
                href={"/collections/sale"}
                className="flex items-center gap-1"
              >
                <CiUnlock />
                <span> Access Sale</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* logo  */}
        <Link href={"/"} className="flex justify-center">
          <svg
            className="c-header__logo-svg is-primary w-[100px] "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 331.64 181.27"
          >
            <g>
              <path d="m146.54 9.85 22.17-3.91v145.57l-22.17 3.91ZM132 86.34a54.3 54.3 0 0 1 6.43 37.38c-4.3 24.36-23.78 42.74-45.3 42.74a38.51 38.51 0 0 1-6.69-.59c-23.83-4.2-39.29-30-34.45-57.4 4.3-24.36 23.77-42.73 45.3-42.73a38.62 38.62 0 0 1 6.7.58c11.56 2.04 21.51 9.15 28.01 20.02Zm-32.4 4.34a19.36 19.36 0 0 0-3.3-.29c-10.72 0-20.43 9.39-22.58 21.84a28.24 28.24 0 0 0 3.22 19.15 20.28 20.28 0 0 0 13.87 10.13 19.27 19.27 0 0 0 3.3.29c10.72 0 20.42-9.39 22.58-21.84 2.41-13.96-5.25-27.15-17.09-29.28Zm80.65 58.8 22.18-3.91V0l-22.18 3.91ZM214 46.83v96.7l22.17-3.91v-96.7Zm0-11.73 22.17-3.91V9L214 12.92ZM8.21 83.11A9.92 9.92 0 0 0 0 92.89v88.38l22.18-3.91v-74.2l26.6-4.69V76l-26.61 4.64Zm298.73 11 24.16-4.26a53.75 53.75 0 0 1-1.61 6.68c-5.17 17-18.23 30.05-33.25 34.41h-.13c-.53.15-1.07.3-1.6.43h-.2c-.53.13-1.05.24-1.58.35h-.22c-.53.1-1.07.19-1.61.27h-.15a37.75 37.75 0 0 1-5.32.38 38.63 38.63 0 0 1-6.7-.59c-23.84-4.21-39.3-30-34.46-57.41 4.3-24.37 23.78-42.75 45.31-42.75a38.83 38.83 0 0 1 6.71.59 39.76 39.76 0 0 1 5 1.22h.11c.78.25 1.55.52 2.32.82h.06c9.4 3.7 17.21 11 22.27 21.06a36 36 0 0 1 2.31 5.86c.56 1.82 1.34 4.8 1.58 6.2.06.31.61 3.21 1 7 .23 2.18.62 5 .73 7.53l-63.9 11.26h-.29c.27.74.55 1.45.88 2.14a20.87 20.87 0 0 0 3.45 5.16l.66.69.46.45a31.1 31.1 0 0 0 2.55 2.16 18.1 18.1 0 0 0 4.14 2.31c.39.15.78.3 1.18.43l.56.17c.58.16 1.12.3 1.71.41 0 0 .83.14 1.7.24a15.11 15.11 0 0 0 1.64.13h.11a21.79 21.79 0 0 0 16.32-7.55c.17-.18.32-.37.48-.55l.44-.54a27.69 27.69 0 0 0 3.17-4.91ZM267.44 73l39.48-7-.06-.18c-1.83-5.2-8.94-13.32-21.07-11.47S269.3 66.36 268 70.43a16.59 16.59 0 0 0-.56 2.57Z"></path>
            </g>
          </svg>
        </Link>
        {/* others */}
        <div className="flex justify-evenly items-center gap-4">
          {/* curency */}
          <div
            onClick={() => setActiveCountryList(!activeCountyList)}
            className="relative  xl:flex hidden items-center justify-center p-3 gap-2 rounded-2xl border  "
          >
            <Image src={country.image} width={20} height={15} alt="" />
            <span>{country.sumsymbole}</span>
            <span>{country.name}</span>

            {/* country list  */}
            <div className=" xl:flex hidden absolute top-12 -left-10 bg-white rounded-2xl text-black">
              <Collapse isOpened={activeCountyList}>
                <ul className=" w-[200px] p-2 ">
                  <li className="flex items-center w-full gap-2 cursor-pointer">
                    <Image
                      src={"https://flagcdn.com/h40/bd.png"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <h2>Bangladesh (BDT)</h2>
                  </li>
                  <li className="flex items-center w-full gap-2 cursor-pointer">
                    <Image
                      src={"https://flagcdn.com/h40/bd.png"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <h2>Bangladesh (BDT)</h2>
                  </li>
                  <li className="flex items-center w-full gap-2 cursor-pointer">
                    <Image
                      src={"https://flagcdn.com/h40/bd.png"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <h2>Bangladesh (BDT)</h2>
                  </li>
                </ul>
              </Collapse>
            </div>
          </div>

          {/* search  */}

          <div className=" xl:flex hidden">
            <input
              type="text"
              onFocus={() => setActiveSearchBtn(true)}
              onBlur={() => setActiveSearchBtn(false)}
              placeholder="Search.."
              className={` ${
                scrolled ? "placeholder-black" : "placeholder-white"
              } w-[270px] srarchInput focus:w-[320px] duration-300 ease-in p-3 bg-transparent   border rounded-full  focus:outline-none`}
            />
            <button
              className={`${activeSearchBtn ? "opacity-100" : "opacity-0"}  ${
                scrolled ? "bg-black text-white" : "bg-white text-black"
              }  p-3 px-8 rounded-full -ml-10 duration-300`}
            >
              GO
            </button>
          </div>
          {/* fav icone */}

          <GrFavorite
            onClick={() => {
              dispatch(SiteModalToggle()), dispatch(FavoriteToggle());
            }}
            size={25}
            className="cursor-pointer"
          />

          <div
            onMouseMoveCapture={() => setShowdropdown(true)}
            onMouseLeave={() => setShowdropdown(false)}
          >
            <CiMenuBurger
              size={25}
              className="cursor-pointer  xl:flex hidden"
            />
          </div>
          <div
            onMouseMoveCapture={() => setShowdropdown(true)}
            onMouseLeave={() => setShowdropdown(false)}
            className={` right-7 ${
              showdropdown ? "opacity-100 " : "opacity-0 "
            }   top-[110px]  group-hover:translate-y-4 -translate-y-10 duration-300 absolute z-20 bg-white  text-black p-8 rounded-[20px]`}
          >
            <div>
              <button
                onClick={() => {
                  dispatch(SiteModalToggle()), dispatch(accountToggle());
                }}
                className="text-[22px] font-medium "
              >
                Account
              </button>
            </div>
            <div className=" pt-3">
              <Link href={"/"} className="text-[22px] font-medium ">
                Support
              </Link>
            </div>
          </div>

          <div
            onClick={() => dispatch(CartToggle())}
            className={` ${
              scrolled ? "bg-black text-white" : "bg-white text-black"
            }  w-10 h-10 rounded-full flex items-center justify-center`}
          >
            {cartItems.length !== 0 ? (
              cartItems.length
            ) : (
              <BsCart size={20} className="cursor-pointer" />
            )}
          </div>
          {/*  */}
        </div>
      </div>
      <NavbarModal
        primaryCategories={primaryCategories}
        topCategory={topCategory}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      ></NavbarModal>
    </div>
  );
};

export default Navbar;
