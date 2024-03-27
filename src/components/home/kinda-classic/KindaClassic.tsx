import React from "react";
import KindaClassicCart from "./KindaClassicCart";
import KidaClassicSmall from "./kidaClassicSmall";

const KindaClassic = ({ productInfo }: any) => {
    const { products, title } = productInfo || {};
    const newProducts = [];
    for (let i = 0; i < products?.length; i += 2) {
        const pair = [products[i], products[i + 1]].filter(Boolean);
        newProducts.push(pair);
    }
    return (
        <div>
            <div className=" max-w-[1500px] mx-auto  px-4">
                <div>
                    <h1 className=" text-[40px] md:text-[80px]  lg:text-[120px] xl:text-[180px]  leading-[100px] xl:leading-[180px]  text-center font-extrabold text-white py-4">
                        {title}
                    </h1>
                </div>

                <div className=" hidden  lg:block">
                    <div className=" grid lg:grid-cols-3 gap-5 py-20">
                        {newProducts?.map((product, index: number) => (
                            <KindaClassicCart doubleProduct={product} key={index} />
                        ))}
                    </div>
                </div>
                <div className=" block lg:hidden">
                    <div className="max-w-[800px] mx-auto">
                        {newProducts?.map((product, index: number) => (
                            <KidaClassicSmall doubleProduct={product} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KindaClassic;
