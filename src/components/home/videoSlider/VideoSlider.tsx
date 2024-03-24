"use client";
import Image from "next/image";
import "./videoSlider.css";
import { useEffect, useRef, useState } from "react";
const VideoSlider = ({ VideoFeatured }: any) => {
  const { featured_video } = VideoFeatured || {}
  const [activeSlider, setActiveSlider] = useState(featured_video?.[0]);
  const videoEl: any = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error: any) => { });
  };

  useEffect(() => {
    attemptPlay();
  }, [activeSlider]);
  return (
    <div>
      <div className="bg-white rounded-b-3xl p-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 container mx-auto">
          <div className="">
            <p className="text-[14px] font-semibold">
              MEET THE ENEMIES OF GRAVITY
            </p>
            <h2 className="lg:text-[100px] font-bold text-[50px] leading-none">
              A colour for <br /> every foot
            </h2>

            <div className="flex justify-center mt-10">
              <div className="w-[450px] max-w-full">
                <p className="text-[20px] font-bold">
                  {activeSlider?.sub_title}
                </p>

                <div className="  videSliderImage w-[450px] h-[500px] mt-10 max-w-full max-h-full rounded-3xl flex justify-center items-center">
                  <Image
                    className="bouncing-element-viderSlider"
                    src={process.env.BASE_URL + "/images/" + activeSlider?.photo}
                    width={400}
                    height={400}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col">
            <div className="rounded-3xl overflow-hidden">
              <video
                className="rounded-3xl"
                style={{
                  maxWidth: "100%",
                  width: "800px",
                  height: "1000px",
                  margin: "0 auto",
                  objectFit: "cover",
                }}
                playsInline
                loop
                muted
                src={activeSlider?.video_url}
                ref={videoEl}
              />
            </div>
            <div className="flex flex-row lg:flex-col justify-center order-first lg:order-last gap-5 pl-4 my-2">
              {featured_video?.map((slider: any) => (
                <div key={slider.id}>
                  <Image
                    onClick={() => setActiveSlider(slider)}
                    className={`${activeSlider?.id == slider?.id &&
                      " border-[#EDDCEC] border-[5px]"
                      } rounded-full  cursor-pointer`}
                    src={process.env.BASE_URL + "/images/" + slider?.avatar}
                    width={100}
                    height={100}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
