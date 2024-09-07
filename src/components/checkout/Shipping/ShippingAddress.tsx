"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  useCreateAddressMutation,
  useFetchAddressQuery,
} from "@/redux/features/address/addressApi";
import AddressBook from "./AddressBook";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addressToggle } from "@/redux/features/address/addressSlice";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { Collapse } from "react-collapse";
import { IoIosArrowUp } from "react-icons/io";
const ShippingAddress = () => {
  const router = useRouter();
  const [allCountry, setAllCountry] = useState<any>([]);
  const [selectCountry, setSelectCountry] = useState<any>();
  const [activeCountry, setActiveCountry] = useState(false);
  const { data: addressData, refetch } = useFetchAddressQuery("as");
  const [createAddress, { data: createResult, isLoading, error, isSuccess }] =
    useCreateAddressMutation();
  const [addAddress, setAddAddress] = useState(false);
  const dispatch = useDispatch();
  const { value } = useSelector((state: any) => state.addressSlice);
  const { cartItems } = useSelector((state: any) => state.Cart);
  const route = useRouter();

  const SaveShippingHandler = async (e: any) => {
    e.preventDefault();
    const form: any = e.target;
    const first_name = form?.first_name.value;
    const last_Name = form?.last_Name.value;
    const address = form?.Address.value;
    const city = form?.city.value;
    const zip_code = form?.Postal_code.value;
    const mobile = form?.Phone.value;
    const state = form?.state.value;
    const data = {
      first_name,
      preferred: "1",
      country: selectCountry?.id,
      country_code: 3434,
      last_Name,
      city,
      address,
      mobile,
      zip_code,
      state: state,
    };
    const res = await createAddress(data);
  };
  
  useEffect(() => {
    if (createResult && isSuccess) {
      refetch();
      setAddAddress(false);
      toast.success("Address created successfully");
    }
  }, [createResult, isSuccess, refetch]);

  const CountryData = async (value: any) => {
    try {
      const response = await fetch(
        `${process.env.BASE_URL}/api/search-country`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: value }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setAllCountry(result?.countries);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event: any) => {
    const value = event.target.value;
    CountryData(value);
  };

  useEffect(() => {
    if (allCountry?.length && !selectCountry) {
      const activeCountry = allCountry?.find(
        (item: any) => item?.countryname === "Bangladesh"
      );
      setSelectCountry(activeCountry);
    }
    if (!allCountry?.length) {
      const value = "";
      CountryData(value);
    }
  }, [allCountry,selectCountry]);

  const NavigateHandler = () => {
    if (!cartItems?.length) {
      toast.error("Please Add to Cart");
    } else if (!value) {
      toast.error("Select Address");
    } else {
      route.push("/checkout/shipping");
    }
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <h2 className="text-lg pt-5">Shipping address</h2>
        <h2
          onClick={() => setAddAddress(!addAddress)}
          className="text-lg pt-5 cursor-pointer"
        >
          <FaPlus
            onClick={() => dispatch(addressToggle(0))}
            size={20}
            className="mx-5"
          />
        </h2>
      </div>
      {/* address */}
      {!addAddress && <AddressBook data={addressData} />}

      {addAddress || !addressData?.length ? (
          <form onSubmit={SaveShippingHandler}>
            {/* country  */}
            <div className=" py-4">
              <label className="text-[15px]   secondary" htmlFor="">
                Country/region *
              </label>
              {/* your  country select  */}

              <div className=" relative">
                <div
                  onClick={() => setActiveCountry(!activeCountry)}
                  className=" border border-[#3331318c] flex justify-between gap-2   rounded-[5px] cursor-pointer "
                >
                  <div className="flex items-center gap-2 py-2 px-3">
                    <Image
                      width={20}
                      height={20}
                      className=" object-fill h-[20px] w-[20px] rounded-full"
                      src={
                        process.env.BASE_URL +
                        `/flags/${selectCountry?.code.toLowerCase()}.svg`
                      }
                      alt="image"
                    />
                    <p className=" capitalize text-[14px] font-normal">
                      {selectCountry?.countryname}
                    </p>
                  </div>
                  <div className=" border-l border-[#3331318c] py-2 px-3">
                    <IoIosArrowUp
                      className={`${
                        activeCountry ? "" : "rotate-180"
                      }   text-colo duration-500`}
                      size={20}
                    />
                  </div>
                </div>

                <Collapse isOpened={activeCountry}>
                  {activeCountry ? (
                    <div className="   z-40 absolute w-full border-b border-l border-r border-[#0000003b] bg-white">
                      <div className=" relative  my-2 border-b  border-[#00000039] ">
                        <input
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          className="   w-full    outline-0   border-[#0000003b]       py-[6px] px-10 "
                          type="search"
                          placeholder="Search country name"
                          name=""
                          id=""
                        />
                        <CiSearch
                          className=" absolute top-[6px] left-1"
                          size={24}
                        />
                      </div>
                      <div className="  max-h-[250px] overflow-y-auto">
                        {allCountry?.map((item: any, index: any) => (
                          <div
                            onClick={() => {
                              setActiveCountry(false), setSelectCountry(item);
                            }}
                            className=" hover:bg-[#F5F5F5] duration-100 cursor-pointer  my-2"
                            key={index}
                          >
                            <div className="flex items-center gap-2 py-2 px-3">
                              <Image
                                width={20}
                                height={20}
                                className=" object-fill h-[20px] w-[20px] rounded-full"
                                src={
                                  process.env.BASE_URL +
                                  `/flags/${item?.code.toLowerCase()}.svg`
                                }
                                alt="image"
                              />
                              <p className=" text-[14px] font-normal">
                                {" "}
                                {item?.countryname}{" "}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </Collapse>
              </div>
            </div>

            {/* First_Name  */}
            <div className="pt-2">
              <label className="py-2 block" htmlFor="First Name">
                First Name
              </label>
              <input
                name="first_name"
                className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                type="text"
                id="First Name"
                placeholder="First Name"
              />
            </div>
            {/* last_Name  */}
            <div className="pt-2">
              <label className="py-2 block" htmlFor="Last_Name">
                Last Name
              </label>
              <input
                name="last_Name"
                className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                type="text"
                id="Last_Name"
                placeholder="Last Name"
              />
            </div>
            {/* Address  */}
            <div className="pt-2">
              <label className="py-2 block" htmlFor="Address">
                Address
              </label>
              <input
                name="Address"
                className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                type="text"
                id="Address"
                placeholder="Address"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* City  */}
              <div className="pt-2">
                <label className="py-2 block" htmlFor="City">
                  City
                </label>
                <input
                  name="city"
                  className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                  type="text"
                  id="City"
                  placeholder="City"
                />
              </div>
              <div className="pt-2">
                <label className="py-2 block" htmlFor="City">
                  state
                </label>
                <input
                  name="state"
                  className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                  type="text"
                  id="state"
                  placeholder="state "
                />
              </div>
              {/* Postal_code  */}
              <div className="pt-2">
                <label className="py-2 block" htmlFor="Postal_code">
                  Postal code
                </label>
                <input
                  name="Postal_code"
                  className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                  type="number"
                  id="Postal_code"
                  placeholder="Postal_code"
                />
              </div>
            </div>
            {/* Phone  */}
            <div className="pt-2">
              <label className="py-2 block" htmlFor="Phone">
                Phone
              </label>
              <input
                name="Phone"
                className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
                type="number"
                id="Phone"
                placeholder="Phone"
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-[#15151f] hover:bg-[#383849] text-white rounded-full px-4 py-2 duration-300 ease-in"
                type="submit"
              >
                Address Address
              </button>
            </div>

            {/* button */}
          </form>
        ): null}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => NavigateHandler()}
          className="bg-[#15151f] hover:bg-[#383849] text-white rounded-full px-4 py-2 duration-300 ease-in"
          type="submit"
        >
          Continue to shipping
        </button>
      </div>
    </div>
  );
};

export default ShippingAddress;
