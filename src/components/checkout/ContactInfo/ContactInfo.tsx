"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import ceoImage from "@/assets/image/ceo.webp";
const ContactInfo = () => {
  const { data: session, status }: any = useSession();
  console.log(session);
  return (
    <div>
      <div className="my-5">
        <h2 className="text-lg">Contact</h2>
        <div className="flex gap-2 mt-2 ">
          {/* profile Image */}
          <div className="">
            <Image
              className=" rounded-md "
              src={ceoImage}
              width={50}
              height={50}
              alt=""
            />
          </div>
          {/* email and logout */}
          <div className="flex flex-col justify-between py-1">
            <p> {session?.user?.email} </p>
            <p className="cursor-pointer">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
