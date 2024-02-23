import Banner from "@/components/home/banner/Banner";
import BestSellers from "@/components/home/bestSellers/BestSellers";
import CategorySlider from "@/components/home/categorySlider/CategorySlider";
import KindaClassic from "@/components/home/kinda-classic/KindaClassic";
import Stayintouch from "@/components/home/stayintouch/Stayintouch";
import VideoSlider from "@/components/home/videoSlider/VideoSlider";
import Handpicked from "@/components/shared/Handpicked/Handpicked";
const page = async () => {
  return (
    <div className="">
      <Banner />
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
