"use client";


import { SingleAddress } from "./SignleAddrss";

const AddressBook = ({ data }: any) => {


  return (
    <div>
      {data?.map((address: any, i: number) => (
        <SingleAddress key={i} address={address} />
      ))}
    </div>
  );
};

export default AddressBook;
