"use client";
import { useEffect, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { CiMenuBurger } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import NavbarModal from "./NavbarModal";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { MenuToggle } from "@/redux/features/responsivemenutoggle/ResponsiveMenuToggleSlice";
import { CartToggle } from "@/redux/features/cart/CartToggleSlice";
import { FavoriteToggle } from "@/redux/features/favoriteToggle/favoriteToggle";
import { SiteModalToggle } from "@/redux/features/sitemodal/SiteModalSlice";
import { accountToggle } from "@/redux/features/account/AccountSlice";
import { topCategoryInterface } from "@/types/CategoryInterface";
import { useRouter } from "next/navigation";

const Navbar = ({ topCategory, primaryCategories, websiteInfo }: any) => {
  const [activeSearchBtn, setActiveSearchBtn] = useState(false);
  const [activeModal, setActiveModal] = useState<Number>();
  const [showdropdown, setShowdropdown] = useState(false);
  const [search, setSearch] = useState("")
  const dispatch = useDispatch();
  const router = useRouter();
  const { cartItems } = useSelector((state: any) => state.Cart);
  const { favItems } = useSelector((state: any) => state.favItems);
  // scrool
  const [scrolled, setScrolled] = useState(false);
  const handleSearch = () => {
    router.push(`/search?product=${search}`)
  }

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
      className={`xl:mx-20 rounded-full px-2 sm:px-2 md:px-8 py-2 z-50 sticky top-5 transition-all  ${scrolled ? "bg-white text-black" : "text-white"
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
            {topCategory?.map((item: topCategoryInterface) => (
              <li
                onClick={() => setActiveModal(item?.id)}
                key={item.id}
                className="text-xl capitalize  cursor-pointer"
              >
                {item.name}
              </li>
            ))}

           
          </ul>
        </div>

        {/* logo  */}
        <Link href={"/"} className="flex justify-center">
          {/* <Image
            className="max-w-[150px]"
            src={`${process.env.BASE_URL}/images/${websiteInfo?.logo}`}
            width={100}
            height={100}
            layout="responsive"
            alt=""
          /> */}
          <h1 className="text-[17px] md:text-[22px] uppercase  font-bold"> {websiteInfo?.group_name} </h1>
        </Link>
        {/* others */}
        <div className="flex justify-evenly items-center gap-4">
           {/* search  */}

          <div className=" xl:flex hidden">
            <input onChange={(e: any) => setSearch(e.target.value)}
              type="text"
              onFocus={() => setActiveSearchBtn(true)}
              onBlur={() => setActiveSearchBtn(false)}
              placeholder="Search.."
              className={` ${scrolled ? "placeholder-black" : "placeholder-white"
                } w-[270px] srarchInput focus:w-[320px] duration-300 ease-in p-3 bg-transparent   border rounded-full  focus:outline-none`}
            />
            <button onClick={handleSearch}
              className={`${activeSearchBtn ? "opacity-100" : "opacity-0"}  ${scrolled ? "bg-black text-white" : "bg-white text-black"
                }  p-3 px-8 rounded-full -ml-10 duration-300`}
            >
              GO
            </button>
          </div>
          {/* fav icone */}

          <p className="relative">
            <GrFavorite
              onClick={() => {
                dispatch(SiteModalToggle()), dispatch(FavoriteToggle());
              }}
               
              className="cursor-pointer  text-[18]  md:text-[28px]"
            />
            <span className="absolute -top-3 -right-2 text-sm">
              {favItems.length}
            </span>
          </p>

          <div
            onMouseMoveCapture={() => setShowdropdown(true)}
            onMouseLeave={() => setShowdropdown(false)}
          >
            <CiMenuBurger
              size={25}
              className="cursor-pointer   text-[18]  md:text-[28px]  xl:flex hidden"
            />
          </div>
          <div
            onMouseMoveCapture={() => setShowdropdown(true)}
            onMouseLeave={() => setShowdropdown(false)}
            className={` right-7 ${showdropdown ? "opacity-100 " : "opacity-0 "
              }   top-[110px]  group-hover:translate-y-4 -translate-y-10 duration-300 absolute z-20 bg-white  text-black p-8 rounded-[20px]`}
          >
            <div>
              <button
                onClick={() => {
                  dispatch(SiteModalToggle()), dispatch(accountToggle())
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
            className={` ${scrolled ? "bg-black text-white" : "bg-white text-black"
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