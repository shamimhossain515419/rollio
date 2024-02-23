"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import './kindaclassic.css'
const KindaClassicCart = () => {

    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    return (
        <div className=' flex  flex-col gap-5 '>
            <div onMouseLeave={() => setActive1(false)} onMouseOverCapture={() => setActive1(true)} className={`w-full ${active1 ? "h-[550px]" : "h-[450px]"} ${active2 ? " !h-[350px]" : "h-[450px]"}   bg-white   duration-700  rounded-3xl overflow-hidden`}>
                <div className={`    h-full  `}>
                    {/* video and image section  */}
                    {
                        active1 ? <div className=' w-full h-full'>
                            <video className=' videoCart w-full  rounded-3xl' src={"https://cdn.shopify.com/videos/c/o/v/58cce1d1494847ea8f563935a9aef651.mp4"} autoPlay loop muted>
                            </video>

                        </div> : <Image className=' h-full w-full object-cover overflow-hidden' width={100} height={100} src={"https://www.rollienation.com/cdn/shop/files/PS00001_Pace-Classic-White_Gum_H_520x@2x.jpg?v=1700694069"} alt='image'></Image>

                    }
                </div>
            </div>
            {/* second image and video  section  */}
            <div onMouseLeave={() => setActive2(false)} onMouseOverCapture={() => setActive2(true)} className=' w-full !overflow-hidden'>
                <div className={`w-full ${active2 ? "h-[550px]" : "h-[450px]"} ${active1 ? "h-[350px]" : "h-[450px]"}   duration-700  rounded-3xl !overflow-hidden`}>
                    {
                        active2 ? <div className=' w-full h-full'>
                            <video className=' videoCart w-full  rounded-3xl' autoPlay loop muted>
                                <source src="https://cdn.shopify.com/videos/c/o/v/b332e41197d74adf9f8407ece895922b.mp4" type="video/mp4" />

                            </video>

                        </div> : <Image className=' h-full w-full object-cover' width={100} height={100} src={"https://www.rollienation.com/cdn/shop/files/SC00181_DerbyPunchChalkPink_H_c195f5a4-8df7-4f39-be3d-d720f27aab95_520x.jpg?v=1678858861"} alt='image'></Image>

                    }
                </div>
            </div>
        </div>
    );
};

export default KindaClassicCart;