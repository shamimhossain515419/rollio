"use client";
import Stayintouch from "@/components/home/stayintouch/Stayintouch";
import VideoSlider from "@/components/home/videoSlider/VideoSlider";
import { countries } from "@/utility/countries";
import React, { useState } from "react";
import Select from "react-select";

const Page = () => {
  const options = [
    { value: "Banbladesh", label: "Banbladesh" },
    { value: "Pakisthan", label: "Pakisthan" },
    { value: "India", label: "India" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (e: any) => {
    setSelectedOption(e?.value);
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: '1px solid #ccc',
      borderRadius: '40px',
      padding: '10px',
    }),
  };


  return (
    <div>
      <div className=" max-w-[900px]  mx-auto px-4 py-20">
        {/* Shipping title  */}
        <h1 className=" text-3xl md:text-8xl text-center   font-extrabold py-7 my-6 text-white">
          Shipping
        </h1>
      </div>

      <div className=" bg-white">
        <div className=" max-w-[900px]  mx-auto px-4 py-20">
          {/* Select country   */}
          <div className=" text-center">
            <h1 className="text-[17px] lg:text-[25px]  text-black py-4 font-medium">
              Select Country
            </h1>
            <p>
              Select country to see details about shipping, returns and  tax/duties costs
            </p>
            <div>
              {/* country  */}
              <div className=" max-w-[400px] mx-auto py-5">
                <Select styles={customStyles}
                  className=" rounded-[40px] "
                  id="country"
                  onChange={handleSelectChange}
                  defaultValue={selectedOption}
                  options={countries}
                  placeholder="Select a country"
                />
              </div>
            </div>
          </div>
          {/* Delivery Options  */}

          <div className="text-[#15151f] pt-20">
            <p className="text-[14px] lg:text-[17px] py-2  font-medium">
              Delivery Options
            </p>
            <div>
              {/* Free Express Shipping  */}
              <h1 className=" text-[17px]  lg:text-[22px] font-medium py-2">
                Free Express Shipping
              </h1>
              <div className="   grid md:grid-cols-3 gap-4 py-7 border-b-[0.5px] border-[#000000da]">
                <p>Orders above ILS ₪600</p>
                <p className="  font-medium  ">FREE</p>
                <p>4-10 Business Days</p>
              </div>
            </div>
            <div>
              {/* Flat Rate Expressg  */}
              <h1 className=" text-[17px]  lg:text-[22px] font-medium py-2">
                Flat Rate Express
              </h1>
              <div className="   grid md:grid-cols-3 gap-4 py-7 border-b-[0.5px] border-[#000000da]">
                <p>Orders below ILS ₪600</p>
                <p className="  font-medium  ">ILS ₪35</p>
                <p>4-10 Business Days</p>
              </div>
            </div>
            <div>
              {/* Duties & Taxes */}
              <h1 className=" text-[17px]  lg:text-[22px] font-medium py-2">
                Duties & Taxess
              </h1>
              <p>Duties and Taxes are all inclusive in the product price</p>
            </div>
            {/* delivary description  */}
            <div>
              <p className=" py-2">All items are dispatched within 48 hours from Australia. There might be dispatch delays of up to 5 business days during public holidays and sale periods.
                <br />Deliveries within Australia are made by Australia Post using registered mail and Star Track.  .</p>
              <p className=" py-2">If you are not available to receive the package, ATL is implied and your parcel will be left in a safe place. If there is not a safe place, another delivery will be attempted again the next day in the same time frame. If a delivery cannot be made after a second attempt, your parcel will returned back to Rollie warehouse. </p>
              <p className=" py-2"> International deliveries are made with  <span className=" font-medium">DHL Express.</span></p>
              <p className=" py-2"> Availability of products is not guaranteed. If you have ordered an item that is not available or that is delayed, we will notify you via email, at which time you will have the option of choosing a different item or receiving a refund.</p>
            </div>
          </div>
          {/* Same Day Delivery- Melbourne  */}
          <div className="text-[#15151f]  py-4">
            <div>
              <h1 className=" text-[22px]  lg:text-[35px] font-bold py-2">
                Same Day Delivery- Melbourne
              </h1>
              <p className=" py-2">Order before 1:30pm AEDT and get your goods delivered by our friendly courier (between 5-9pm). </p>
              <p className="py-2">Same Day delivery is only valid for select Melbourne metro postcodes, please confirm if your postcode is eligible at check out. Cost is $7 for Same Day Delivery or free on all orders over $250. </p>
              <p className="py-2">If you are not available to receive the package, ATL is implied and your parcel will be left in a safe place. If there is not a safe place, another delivery will be attempted again the next day in the same time frame. If a delivery cannot be made after a second attempt, your parcel will returned back to Rollie warehouse.</p>
              <p className="py-2">Same Day Delivery is not valid during Public Holidays and promotional periods.</p>

            </div>

          </div>
          {/* International Orders Duties and Taxes  */}
          <div className="text-[#001B36] pt-7 pb-20">
            <div>
              <h1 className=" text-[22px]  lg:text-[35px] font-bold py-2">
                International Orders Duties and Taxes
              </h1>
              <p className=" py-2">Please refer to the table here for duties and taxes applicable in your region.  </p>
              <p className="py-2">For countries where duties & taxes are not included, you will have the option to choose DDP (Delivery Duty Paid) or DDU (Delivery Duty Unpaid) at checkout.</p>
              <p className="py-2">Please refer to the table here for duties and taxes applicable in your region. </p>
            </div>

          </div>
        </div>
      </div>

      <VideoSlider />
      <Stayintouch />

    </div>
  );
};

export default Page;
