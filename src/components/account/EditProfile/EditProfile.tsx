import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const EditProfile = ({ setActive }: any) => {
  const UpdateProfileHandler = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");

    const value = {
      name,
      email,
      password,
    };

  };
  return (
    <div>
      <div onClick={() => setActive("profile")} className="flex cursor-pointer items-center gap-2 pb-4">
        <IoMdArrowRoundBack className="text-[18px]" />
        <p className="text-[14px] font-normal">Back</p>
      </div>

      <form onSubmit={UpdateProfileHandler} className=" w-full  py-3">
        <input
          required
          className=" w-full border rounded-md border-[#000000c9] outline-0  py-3 px-3"
          placeholder="Email"
          type="email"
          name="email"
          id=""
        />
        <input
          required
          className=" w-full border rounded-md border-[#000000c9] outline-0  py-3 px-3 mt-2"
          placeholder="Name"
          type="text"
          name="name"
          id=""
        />

        <input
          required
          className=" w-full border rounded-md border-[#000000c9] outline-0   mt-2 py-3 px-3"
          placeholder="Password"
          type="password"
          name="password"
          id=""
        />
        <div>
          {/* login code  */}
          <button
            className={`  bg-black py-2 text-center  w-full  px-3 opacity-75 hover:opacity-100 duration-200 my-4 rounded-[40px] block `}
          >
            <span className="text-white text-[15px] lg:text-[18px] font-medium">
              Update
            </span>
          </button>
          {/* <div className="text-[19px] font-semibold text-gray-800 text-center">
            OR
          </div> */}
          {/* <div className="flex justify-center items-center border border-[#0000009d]  gap-4 py-2 text-center  w-full  px-3  duration-200 my-4 rounded-[40px] ">
            <FcGoogle size={24}></FcGoogle>{" "}
            <button className="text-[15px]  font-medium">
              {" "}
              Get Login Code{" "}
            </button>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
