import Image from "next/image";
import Link from "next/link";

const OrderCard = () => {
  return (
    <Link
      href={"/account/order/1"}
      className="border p-2 flex justify-between items-center text-[14px] rounded my-2"
    >
      <p># 1420</p>
      <div>
        <Image
          className="rounded-full border"
          src={
            "https://www.rollienation.com/cdn/shop/files/PS00022_PaceCrystal_H_1200x.jpg?v=1707821120"
          }
          width={50}
          height={50}
          alt=""
        />
      </div>
      <p>
        <span className="text-slate-500">Qty:</span>
        <span> 5</span>
      </p>
      <p className="bg-red-200 px-2 rounded-lg">
        <span className="">Pending</span>
      </p>
    </Link>
  );
};

export default OrderCard;
1;
