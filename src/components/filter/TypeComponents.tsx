import Image from 'next/image';
import React from 'react';


// 
// 

const TypeComponents = () => {
    return (
        <div>
            <div className="flex items-center flex-wrap gap-7 ">
                <div className='group  flex justify-center items-center flex-col'>
                    <div className=" w-[70px] h-[70px]  border border-[#0000005f]  cursor-pointer   flex justify-center items-center     group-hover:border-black rounded-xl  overflow-hidden">
                        <Image className='  group-hover:scale-95 w-full h-full' width={100} height={100} src={"https://cdn.shopify.com/s/files/1/0146/8461/8806/files/Yellow_f8d99ad1-1418-447b-9a53-478d65915495_256x256.jpg?v=1659863539"} alt='image'></Image>
                    </div>
                    <h1 className="text-center text-[16px] py-1">Accessories</h1>
                </div>
                <div className='group  flex justify-center items-center flex-col'>
                    <div className=" w-[70px] h-[70px]  border border-[#0000005f]  cursor-pointer   flex justify-center items-center     group-hover:border-black rounded-xl  overflow-hidden">
                        <Image className='  group-hover:scale-95 w-full h-full' width={100} height={100} src={"https://cld.accentuate.io/94168776758/1659924234649/whitederby-1.png?v=1659924825676&options=w_130"} alt='image'></Image>
                    </div>
                    <h1 className="text-center text-[16px] py-1">Boots</h1>
                </div>
                <div className='group  flex justify-center items-center flex-col'>
                    <div className=" w-[70px] h-[70px]  border border-[#0000005f]  cursor-pointer   flex justify-center items-center     group-hover:border-black rounded-xl  overflow-hidden">
                        <Image className='  group-hover:scale-95 w-full h-full' width={100} height={100} src={"https://cld.accentuate.io/94168776758/1659924336064/flat-1.png?v=1659924866422&options=w_130"} alt='image'></Image>
                    </div>
                    <h1 className="text-center text-[16px] py-1">Derby</h1>
                </div>
                <div className='group  flex justify-center items-center flex-col'>
                    <div className=" w-[70px] h-[70px]  border border-[#0000005f]  cursor-pointer   flex justify-center items-center     group-hover:border-black rounded-xl  overflow-hidden">
                        <Image className='  group-hover:scale-95 w-full h-full' width={100} height={100} src={"https://cld.accentuate.io/94168776758/1659924234649/whitederby-1.png?v=1659924825676&options=w_130"} alt='image'></Image>
                    </div>
                    <h1 className="text-center text-[16px] py-1">Flats</h1>
                </div>


            </div>
        </div >
    );
};

export default TypeComponents;