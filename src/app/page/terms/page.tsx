import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className=" max-w-[900px]  mx-auto px-4 py-20">
        <h1 className=" text-3xl md:text-8xl text-center   font-extrabold py-7 my-6 text-white">Terms & Conditions</h1>
      </div>

      <div className=" bg-white">
        <div className=" max-w-[900px]  mx-auto px-4 py-20">
          {/* RETURNS CONDITIONS   */}
          <div>
            {/* term   title  */}
            <h1 className=" uppercase text-[14px] lg:text-[16px] font-medium">RETURNS CONDITIONS </h1>
            {/* term condiation  */}
            <div className="text-[#15151f]">
              <p className=" py-3">All returns are subject to the following conditions. Rollie retains the right to reject a return on the basis of a failure to adhere to these Return Conditions or a failure to comply with this Policy.</p>
              <ol className="list-decimal  pl-8 space-y-4">
                <li>
                  <p> All items must be in a new, unwashed and unused condition, with all tags attached and the shoe box in original condition.</p>
                </li>
                <li>
                  <p> We will not accept your return if Rollie considers the item(s) used.</p>
                </li>
                <li>
                  <p> Return request must be made within 30 days from date of purchase</p>
                </li>
                <li>
                  <p>Rollie will not be held responsible for any packages returned that have not been received on our end.
                  </p>
                </li>
                <li>
                  <p> We only accept returns purchased through rollienation.com.</p>
                </li>
                <li>
                  <p> No refunds, only exchanges and store credit available on sale items.</p>
                </li>
                <li>
                  <p> No returns on accessories, merch & cleaning products</p>
                </li>

              </ol>
              <p className="py-3">If you have purchased your shoes from a Rollie stockist, please contact the store in which you purchased them from for further assistance. Rollie cannot be held accountable, or provide refunds or exchanges for purchases made outside of rollienation.com </p>
            </div>

          </div>
          {/* GALENTINE'S OFFER  */}
          <div className=" mt-2">
            <h1 className=" uppercase text-[14px] lg:text-[16px] font-medium py-2">{"GALENTINE'S OFFER"} </h1>
            <ol className="space-y-4">
              <li>
                <p>Only valid on selected Derby orders placed on Feb 12, 2024</p>
              </li>
              <li>
                <p> Rollie Nation reserves the right to cancel orders if deemed fraudulent</p>
              </li>
              <li>
                <p>Rollie Nation reserves the right to cancel orders if deemed fraudulent
                </p>
              </li>
              <li>
                <p> Max 2 orders per customer 2</p>
              </li>
              <li>
                <p> Valid on selected Derby styles only.</p>
              </li>
              <li>
                <p> Valid in store on selected styles for Feb 12 & Feb 13</p>
              </li>

            </ol>
            <p className=" uppercase text-[13px] py-3 lg:text-[15px] font-medium">ALL SALES ARE FINAL | NO CANCELLATIONS | NO RETURNS | NO EXCHANGES | NO REFUNDS | NO ADDRESS CHANGES</p>
            <p className=" py-2">No other discounts, coupons, promos or loyalty points can be used on promo purchases.</p>

            <p className=" py-2">No rainchecks, only valid on available stock on  <Link className=" uppercase" href={'/'}>www.rolllienation.com</Link> and in Fitzroy flagship store</p>

          </div>
          {/* STUDENT OFFER  */}
          <div className=" py-2">
            <h1 className=" uppercase text-[14px] lg:text-[16px] font-medium py-2">{"STUDENT OFFER"} </h1>
            <p className=" py-1">Use code at checkout. Valid on selected styles only. Cannot be combined with other offers or discount codes, including Rollie Rewards points. Valid on available stock only. No rain checks.</p>
          </div>
          {/* FRIENDS & FAMILY EVENT  */}
          <div className=" py-2">
            <h1 className=" uppercase text-[14px] lg:text-[16px] font-medium py-2">{"FRIENDS & FAMILY EVENT"} </h1>
            <p className=" py-1">Ends Sunday Dec 17, 2023. Use code at checkout. Promo purchases only eligible for exchange or store credit. Valid on selected styles only. Archive sale items with further discount applied during the promo are final sale and not eligible for returns unless faulty. Cannot be combined with other offers or discount codes, including Rollie Rewards points. Valid on available stock only. No rain checks.</p>
          </div>
          {/* COLLABS  */}
          <div className=" py-4">
            <h1 className=" uppercase text-[14px] lg:text-[16px] font-medium py-2">{"COLLABS"} </h1>
            <p className=" py-1">Discount codes, including loyalty points not valid on collaborations. </p>
          </div>
          {/* COLLABS  */}
          <div className=" py-4">
            <h1 className=" uppercase text-[14px] lg:text-[16px] font-medium py-2">{"COUPON CODES"} </h1>
            <p className=" py-1">Coupon codes are not valid on accessories, merchandise, gift cards or sale items.

            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;
