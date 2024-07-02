import {
  useFetchAddressQuery,
  useRemoveAddressMutation,
} from "@/redux/features/address/addressApi";
import { addressToggle } from "@/redux/features/address/addressSlice";
import { AddressInterface } from "@/types/AddressInterface";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export const SingleAddress = ({ address }: { address: AddressInterface }) => {
  const [RemoveAddress, { data: removeResult, error }] =
    useRemoveAddressMutation();
  const { refetch, isLoading } = useFetchAddressQuery("");
  const handleDelete = async (id: any) => {
    const res = await RemoveAddress({
      address_id: id,
    }).unwrap();
    if (res?.status === "success") {
      toast.success(res?.message);
      refetch();
    }
  };

  const dispatch = useDispatch();
  const { value } = useSelector((state: any) => state.addressSlice);

  return (
    <div onClick={() => dispatch(addressToggle(address.id))} className=" py-2">
      <div>
        <div>
          <div
            className={` ${
              value == address?.id && "bg-stone-200"
            } border border-[#2e2e2eaf] flex justify-between items-center gap-2 p-4 rounded-[5px]`}
          >
            <div className=" flex  items-center gap-4 md:gap-10 ">
              <div>
                <h1 className="text-[16px] font-medium text-color capitalize my-1">
                  {address?.first_name} {address?.last_name} <br />{" "}
                  {address?.address}
                </h1>
              </div>
              <div>
                <h1 className="text-[16px] font-medium text-color capitalize my-1">
                  {" "}
                </h1>
                <h1 className="text-[16px] font-medium text-color my-1">
                  {" "}
                  {address?.zip_code}{" "}
                </h1>
                <p className="text-[16px] font-medium text-color capitalize my-1">
                  {" "}
                  {address?.country}
                </p>
              </div>
            </div>
            <div>
              <div className="  flex gap-3 items-center  md:gap-5">
                {/* <button className="text-[16px] hover:bg-[#F5F5F5]  rounded-[5px] duration-300 font-semibold primary p-2  outline-0  border-none">
                  Edit
                </button> */}
                <button
                  onClick={() => handleDelete(address?.id)}
                  className="text-[16px] hover:bg-[#F5F5F5]  rounded-[5px] duration-300 font-semibold primary p-2  outline-0  border-none"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
