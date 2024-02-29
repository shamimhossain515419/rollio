import Banner from "@/components/home/banner/Banner";
import BestSellers from "@/components/home/bestSellers/BestSellers";
import CategorySlider from "@/components/home/categorySlider/CategorySlider";
import KindaClassic from "@/components/home/kinda-classic/KindaClassic";
import Stayintouch from "@/components/home/stayintouch/Stayintouch";
import VideoSlider from "@/components/home/videoSlider/VideoSlider";
import Handpicked from "@/components/shared/Handpicked/Handpicked";

async function getData() {
  let websiteInfo = await (
    await fetch(
      `${process.env.BASE_URL}/api/group-information/${process.env.GROUP_ID}`,
      {
        next: { revalidate: 300 },
      }
    )
  ).json();

  return { websiteInfo };
}
const page = async () => {
  const { websiteInfo } = await getData();

  return (
    <div className="">
      <Banner websiteInfo={websiteInfo?.data} />
      <BestSellers />
      <CategorySlider />
      <VideoSlider />
      <KindaClassic />
      <Handpicked />
      <Stayintouch></Stayintouch>
    </div>
  );
};

export default page;
