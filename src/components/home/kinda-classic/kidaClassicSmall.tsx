import Image from "next/image";

import './kindaclassic.css'
const KidaClassicSmall = () => {
    return (
        <div className="grid  grid-cols-2 gap-3 overflow-hidden py-[6px]">
            <div className=" flex flex-col gap-3">
                <div className=" h-[40%] overflow-hidden rounded-[10px] sm:rounded-3xl ">
                    <Image className=' h-full w-full object-cover' width={100} height={100} src={"https://www.rollienation.com/cdn/shop/files/PS00001_Pace-Classic-White_Gum_H_520x@2x.jpg?v=1700694069"} alt='image'></Image>
                </div>

                <div className="  h-[60%]">
                    <video className=' video w-full  rounded-[10px] sm:rounded-3xl' autoPlay loop muted>
                        <source src="https://cdn.shopify.com/videos/c/o/v/b332e41197d74adf9f8407ece895922b.mp4" type="video/mp4" />
                    </video>
                </div>

            </div>
            <div className=" flex flex-col gap-3  sm:gap-5">

                <div className=" h-[60%]">
                    <video className=' video w-full  rounded-[10px] sm:rounded-3xl' autoPlay loop muted>
                        <source src="https://cdn.shopify.com/videos/c/o/v/58cce1d1494847ea8f563935a9aef651.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className=" h-[40%] overflow-hidden rounded-[10px] sm:rounded-3xl">
                    <Image className=' h-full w-full object-cover' width={100} height={100} src={"https://www.rollienation.com/cdn/shop/files/SC00181_DerbyPunchChalkPink_H_c195f5a4-8df7-4f39-be3d-d720f27aab95_520x.jpg?v=1678858861"} alt='image'></Image>
                </div>
            </div>
        </div>
    );
};

export default KidaClassicSmall;