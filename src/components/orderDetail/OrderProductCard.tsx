"use client";
import { useCreateReturnMutation } from "@/redux/features/api/orderReturn/orderReturn";
import Image from "next/image";
import { useState } from "react";
import { Collapse } from "react-collapse";
import toast from "react-hot-toast";

const OrderProductCard = ({ product, order_info }: any) => {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [photo, setPhoto] = useState("");

  const [createReturn, { data, error, isSuccess, isLoading }] =
    useCreateReturnMutation();

  const returnHandler = () => {
    const formData = new FormData();
    formData.append("group_id", `${process.env.GROUP_ID}`);
    formData.append("invoice", `${order_info?.order_invoice}`);
    formData.append("order_log_id", `${product?.id}`);
    formData.append("notes", note);
    formData.append("return_quantity", Quantity);
    formData.append("photo", photo);
    createReturn(formData);
    if (data?.status == "success") {
      toast.success(data.message);
      setQuantity("");
      setNote("");
    }
  };

  return (
    <div className="">
      <div className="text-sm p-2 flex justify-between items-center shadow-sm">
        <div className="">{product?.product_name}</div>
        <div className="">
          <Image
            className="rounded-full border"
            src={
              "https://www.rollienation.com/cdn/shop/files/PS00022_PaceCrystal_H_1200x.jpg?v=1707821120"
            }
            width={50}
            height={50}
            alt=""
          />
        </div>
        <div className="">Qty: {product?.quantity}</div>
        <div className="">Price: {product?.unit_price}</div>
        <div onClick={() => setOpen(!open)} className="cursor-pointer">
          Return
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="p-4 ">
          <div>
            <div>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Quantity"
                  value={Quantity}
                  type="number"
                  required
                  className=" mt-2 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <input
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Note"
                  value={note}
                  type="text"
                  required
                  className="mt-2  block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <input
                  onChange={(e: any) => setPhoto(e.target.files[0])}
                  type="file"
                  required
                  className="block w-full mt-2 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div
                onClick={() => returnHandler()}
                className="text-white bg-black cursor-pointer px-10 mt-2 p-2 rounded-full  w-[100px] max-w-full flex justify-center items-center"
              >
                <span> {!isLoading ? "  Submit" : "Loading...."} </span>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default OrderProductCard;
