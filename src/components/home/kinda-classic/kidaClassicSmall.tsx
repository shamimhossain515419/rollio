import Image from "next/image";

import "./kindaclassic.css";
const KidaClassicSmall = ({ doubleProduct }: any) => {
    const productOne = doubleProduct?.[0];
    const productTwo = doubleProduct?.[1];
    return (
        <div className="grid  grid-cols-2 gap-3 overflow-hidden py-[6px]">
            <div className=" flex flex-col gap-3">
                <div className=" h-[40%] overflow-hidden rounded-[10px] sm:rounded-3xl ">
                    <Image
                        className=" h-full w-full object-cover"
                        width={100}
                        height={100}
                        src={process.env.BASE_URL + "/images/" + productOne?.photo}
                        alt="image"
                    ></Image>
                </div>

                <div className="  h-[60%]">
                    <video
                        className=" video w-full  rounded-[10px] sm:rounded-3xl"
                        autoPlay
                        loop
                        muted
                    >
                        <source src={productOne?.video_url} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className=" flex flex-col gap-3  sm:gap-5">
                <div className=" h-[60%]">
                    <video
                        className=" video w-full  rounded-[10px] sm:rounded-3xl"
                        autoPlay
                        loop
                        muted
                    >
                        <source src={productTwo?.video_url} type="video/mp4" />
                    </video>
                </div>
                <div className=" h-[40%] overflow-hidden rounded-[10px] sm:rounded-3xl">
                    <Image
                        className=" h-full w-full object-cover"
                        width={100}
                        height={100}
                        src={process.env.BASE_URL + "/images/" + productTwo?.photo}
                        alt="image"
                    ></Image>
                </div>
            </div>
        </div>
    );
};

export default KidaClassicSmall;
