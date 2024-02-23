"use client";
import Image from "next/image";

import { useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";
const Page = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.7", "start 0.18"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, [scrollYProgress]);

  return (
    <div className=" container mx-auto px-4">
      {/* about title  */}
      <div className=" pt-8 w-full overflow-hidden">
        <h1 className=" text-[70px] lg:text-[150px] leading-[1] text-white py-4 font-extrabold ">
          The spark of inspiration
        </h1>
        <div className="  grid  lg:grid-cols-2 gap-6 lg:gap-10">
          {/* images  */}
          <div>
            <div className=" ml-10">
              <div className=" max-w-[250px] bg-white rounded-3xl p-2">
                <Image
                  className=" rounded-3xl "
                  width={250}
                  height={200}
                  src={
                    "https://www.rollienation.com/cdn/shop/files/highlight-1_fe4c5fef-078b-4114-a0d5-53d9c90393e4_264x.jpg?v=1657597586"
                  }
                  alt="image"
                ></Image>
              </div>
            </div>
            <div className=" pr-10">
              <div className=" max-w-[200px] bg-white rounded-3xl p-2 my-20">
                <Image
                  className=" rounded-3xl "
                  width={200}
                  height={200}
                  src={
                    "https://www.rollienation.com/cdn/shop/files/highlight-4_8498456e-84e3-4520-b039-1b96b8133a42_200x.jpg?v=1657597621"
                  }
                  alt="image"
                ></Image>
              </div>
            </div>

            <div className=" flex  items-center gap-3">
              <div>
                <div className=" max-w-[200px] bg-white rounded-3xl p-2 mt-8">
                  <Image
                    className=" rounded-3xl "
                    width={200}
                    height={200}
                    src={
                      "https://www.rollienation.com/cdn/shop/files/highlight-4_8498456e-84e3-4520-b039-1b96b8133a42_200x.jpg?v=1657597621"
                    }
                    alt="image"
                  ></Image>
                </div>
              </div>
              <div>
                <div className=" max-w-[300px] bg-white rounded-3xl p-2 mt-8">
                  <Image
                    className=" rounded-3xl w-full h-[350px] "
                    width={200}
                    height={200}
                    src={
                      "https://www.rollienation.com/cdn/shop/files/highlight-3_1a89764f-900d-4005-b4ad-6853c16991f1_320x.jpg?v=1657597613"
                    }
                    alt="image"
                  ></Image>
                </div>
                <div className=" pt-44">
                  <div className=" max-w-[200px] bg-white rounded-3xl p-2 ">
                    <Image
                      className=" rounded-3xl "
                      width={200}
                      height={200}
                      src={
                        "https://www.rollienation.com/cdn/shop/files/highlight-5_165x.jpg?v=1657597686"
                      }
                      alt="image"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" pt-6 w-full">
            <motion.h1
              ref={element}
              style={{ opacity: scrollYProgress }}
              className=" text-5xl lg:text-7xl font-bold leading-[60px] lg:leading-[80px] text-white "
            >
              Founder Vince Lebon has been doing shoes for a long time. After a
              decade of designing for some of the biggest names in Aussie shoe
              brands, Vince felt like something was missing.
            </motion.h1>
            <motion.h1
              style={{ opacity: scrollYProgress }}
              ref={element}
              className=" text-5xl lg:text-7xl font-bold leading-[60px] lg:leading-[80px] text-white mt-16 "
            >
              He wanted to create a comfortable, on-the-go shoe that felt just
              as good as it looked.
            </motion.h1>
          </div>
        </div>

        {/* And so, the idea was bor n */}

        <div className=" py-10">
          <h1 className=" text-5xl  text-white lg:text-9xl font-bold">
            And so, the idea was born{" "}
          </h1>
          <div className="  w-full">
            <Image
              className=" w-full h-full  block t mx-auto object-cover"
              width={500}
              height={1400}
              layout="responsive"
              src={
                "https://www.rollienation.com/cdn/shop/files/derby_6dba2596-e2e1-4245-94b6-59f156f95941_1192x.png?v=1657599263"
              }
              alt="image"
            ></Image>
          </div>
        </div>
        {/* about  image seconda section */}
        <div className="  grid  lg:grid-cols-2 gap-6 lg:gap-10 pb-20">
          <div className=" pt-6 w-full">
            <h1 className=" text-5xl lg:text-7xl font-bold leading-[60px] lg:leading-[80px] text-white ">
              Armed with a simple sketch and a challenge, Rollie Nation was
              born. Prior to Rollie, it was believed that making a lightweight,
              comfortable, and durable shoe wasn’t possible. We proved them
              wrong.
            </h1>
            <h1 className=" text-5xl lg:text-7xl font-bold leading-[60px] lg:leading-[80px] text-white mt-16 ">
              Our footwear is everything shoes should be. Comfy enough for
              all-day adventures, beautifully designed, and wholly unique.
              Through trial and error, a decade of learning and relearning we’ve
              perfected our craft and we’re ready to share it with you.
            </h1>
          </div>
          <div>
            <div className=" ml-10 flex justify-center">
              <div className=" max-w-[250px]   bg-white rounded-3xl p-2">
                <Image
                  className=" rounded-3xl "
                  width={250}
                  height={200}
                  src={
                    "https://www.rollienation.com/cdn/shop/files/influencer-1_e0f1ab64-5320-4225-85a6-e48b1490ea1e_320x.jpg?v=1657597745"
                  }
                  alt="image"
                ></Image>
              </div>
            </div>
            <div className=" pr-10 w-full  gap-3">
              <div className=" max-w-[200px] bg-white rounded-3xl p-2 my-20">
                <Image
                  className=" rounded-3xl "
                  width={200}
                  height={200}
                  src={
                    "https://www.rollienation.com/cdn/shop/files/influencer-2_b6bda614-1587-43cc-b27f-5484d3d1be03_200x.jpg?v=1657597751"
                  }
                  alt="image"
                ></Image>
              </div>
            </div>

            <div className="   gap-3">
              <div className=" flex justify-end ">
                <div className=" max-w-[500px] bg-white rounded-3xl p-2 ">
                  <Image
                    className="  w-full rounded-3xl h-[350px] "
                    width={250}
                    height={300}
                    src={
                      "https://www.rollienation.com/cdn/shop/files/240465696_2901979166683072_1540997080044651364_n_2_264x.jpg?v=1654733198"
                    }
                    alt="image"
                  ></Image>
                </div>
              </div>
              <div className="  flex justify-center mt-11">
                <div className=" max-w-[200px] bg-white rounded-3xl p-2 mt-8">
                  <Image
                    className=" rounded-3xl w-full h-[250px] "
                    width={200}
                    height={200}
                    src={
                      "https://www.rollienation.com/cdn/shop/files/highlight-6_165x.jpg?v=1657597815"
                    }
                    alt="image"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
