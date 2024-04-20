import Banner from "@/components/home/banner/Banner";
import BestSellers from "@/components/home/bestSellers/BestSellers";
import CategorySlider from "@/components/home/categorySlider/CategorySlider";
import KindaClassic from "@/components/home/kinda-classic/KindaClassic";
import Stayintouch from "@/components/home/stayintouch/Stayintouch";
import VideoSlider from "@/components/home/videoSlider/VideoSlider";
import Handpicked from "@/components/shared/Handpicked/Handpicked";

async function getData() {
  try {
    let websiteInfo: any = await (
      await fetch(
        `${process.env.BASE_URL}/api/group-information/${process.env.GROUP_ID}`,
        {
          next: { revalidate: 300 },
        }
      )
    ).json();
    let VideoFeatured = await (
      await fetch(
        `${process.env.BASE_URL}/api/featured-video/${process.env.GROUP_ID}`,
        {
          next: { revalidate: 300 },
        }
      )
    ).json();
    let HandpickedInfo = await (
      await fetch(
        `${process.env.BASE_URL}/api/featured-product/${process.env.GROUP_ID}/4`,
        {
          next: { revalidate: 300 },
        }
      )
    ).json();
    let res = await fetch(
      `${process.env.BASE_URL}/api/featured-product/${process.env.GROUP_ID}/3`,
      {
        next: { revalidate: 300 },
      }
    );
    const products = await res.json();
    return { websiteInfo, products, VideoFeatured, HandpickedInfo };
  } catch (e) {
    console.log(e);
  }
}
const page = async () => {
  const data: any = await getData();

  return (
    <div className="">
      <Banner websiteInfo={data?.websiteInfo} />
      <BestSellers />
      <CategorySlider />
      <VideoSlider VideoFeatured={data?.VideoFeatured} />
      <KindaClassic productInfo={data?.products} />
      <Handpicked HandpickedInfo={data?.HandpickedInfo} />
      <Stayintouch></Stayintouch>
    </div>
  );
};

export default page;
