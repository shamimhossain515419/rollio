"use client";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const ReturnsAccordion = ({ item }: any) => {
    const [activeQuestion, setActiveQuestion] = useState<boolean>(false);
    return (
        <div className=" py-3">
            <div className={`py-3  lg:py-5 border-b-[0.5px] border-[#33333351] `}>
                <div
                    onClick={() => setActiveQuestion(!activeQuestion)}
                    className="  cursor-pointer flex justify-between items-center gap-2"
                >
                    <h1 className="text-[15px] lg:text-[25px] font-medium">
                        {" "}
                        {item?.name}{" "}
                    </h1>
                    <div className={` ${activeQuestion ? 'animate-fadeInUp_accordion' : 'animate-fadeOutDown_accordion'}`}>
                        {activeQuestion ? (
                            <FiMinus className=" text-[20px] lg:text-[30px]" />
                        ) : (
                            <FiPlus className=" text-[20px] lg:text-[30px]" />
                        )}
                    </div>
                </div>

                <Collapse isOpened={activeQuestion}>
                    <div className=" pt-5">
                        {
                            item?.desctiption?.map((item: any, index: number) => <p className="text-[13px] py-3 md:text-[16px] " key={index}> {item} </p>)
                        }
                    </div>
                </Collapse>


            </div>
        </div>
    );
};

export default ReturnsAccordion;
