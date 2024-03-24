"use client";
import { AddressInterface } from "@/types/AddressInterface";
import { SingleAddress } from "./SignleAddrss";

const AddressBook = ({ data }: { data: AddressInterface[] }) => {
  return (
    <div>
      {data?.map((address: AddressInterface, i: number) => (
        <SingleAddress key={i} address={address} />
      ))}
    </div>
  );
};

export default AddressBook;
