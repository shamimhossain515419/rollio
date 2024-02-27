"use client";

import { useFetchAddressQuery } from "@/redux/features/address/addressApi";
import { SingleAddress } from "./SignleAddrss";

const AddressBook = () => {
  const { data, isLoading } = useFetchAddressQuery("as");

  console.log(data);

  return (
    <div>
      {data?.map((address: any, i: number) => (
        <SingleAddress key={i} address={address} />
      ))}
    </div>
  );
};

export default AddressBook;
