import Button from "@/components/utilityComponent/button/Button";
import Image from "next/image";
import Link from "next/link";

const ContactPage = ({ title, button_text, link }: any) => {
  return (
    <div className=" bg-white   py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className=" grid md:grid-cols-2 gap-6 items-center  md:gap-10 lg:gap-20  ">
          <div className="  text-center md:text-start  md:order-last">
            <h1 className="text-[50px] leading-[60px]  lg:text-[80px] lg:leading-[90px] font-extrabold  text-black">
              {title}
            </h1>
            <div className=" pt-4 lg:pt-10">
              <Link href={link}>{button_text}</Link>
              <Button title={"Contact us"}></Button>
            </div>
          </div>
          <div>
            <div className="  flex justify-between gap-5  ">
              <div className=" max-w-[200px]">
                <Image
                  className="  rounded-[30px]"
                  width={200}
                  height={100}
                  src={
                    "https://www.rollienation.com/cdn/shop/files/highlight-2_4953f237-db69-44f3-8700-11f5be511a4d_165x.jpg?v=1657601269"
                  }
                  alt="image"
                ></Image>
              </div>
              <div className=" lg:px-10 lg:pt-20   ">
                <Image
                  className="  rounded-[30px]"
                  width={300}
                  height={200}
                  src={
                    "https://www.rollienation.com/cdn/shop/files/highlight-3_05cce888-44c3-4c9a-9d32-9aa0d86c7452_320x.jpg?v=1657601273"
                  }
                  alt="image"
                ></Image>
              </div>
            </div>
            <div className=" flex  justify-center md:justify-start  md:px-10 lg:pl-20 pt-8">
              <Image
                className="  rounded-[30px]"
                width={200}
                height={100}
                src={
                  "https://www.rollienation.com/cdn/shop/files/highlight-4_e05b5676-cc81-4bdc-b773-6e5d25c13c3a_200x.jpg?v=1657601280ss"
                }
                alt="image"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
