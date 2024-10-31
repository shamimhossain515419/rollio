import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import OfferSlider from "@/components/shared/offerSlider/OfferSlider";
import ResponsiveMenu from "@/components/shared/navbar/ResponsiveMenu";
import ReduxProvider from "@/components/reduxProvider/ReduxProvider";
import "react-toastify/dist/ReactToastify.css";
import YourCart from "@/components/yourcart/YourCart";
import NextTopLoader from "nextjs-toploader";
import SiteModal from "@/components/siteModal/SiteModal";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import TokenProvider from "@/components/AuthProvider/TokenProvider";
import ChattingBox from "@/components/chattingbox/ChattingBox";
const inter = Inter({ subsets: ["latin"] });
export async function generateMetadata(projectInfo: any) {
  const keyword = projectInfo?.group_name || projectInfo?.group_name || " ";
  return {
    title: projectInfo?.group_name || "ClaraCasa",
    description: projectInfo?.description || projectInfo?.description,
    keywords: keyword, // Added keywords for SEO
    icons: {
      icon: `${process.env.BASE_URL}/images/${projectInfo?.logo}`, // Assuming the favicon is stored like this
    },
    metadataBase: new URL(`${process.env.BASE_URL}`),
    openGraph: {
      url: `${process.env.BASE_URL}`,
      siteName: "ClaraCasa",
      images: [
        {
          url: `/images/${projectInfo?.logo}`,
          width: 250,
          height: 250,
          alt: "Social Media Share Image",
        },
      ],
    },
  };
}
// data fetching
async function getData() {
  try {
    let topCategory = await (
      await fetch(
        `${process.env.BASE_URL}/api/category/top-category/${process.env.GROUP_ID}`,
        {
          next: { revalidate: 30 },
        }
      )
    ).json();
    let PrimaryCategory = await (
      await fetch(
        `${process.env.BASE_URL}/api/category/get-all-primary-category/${process.env.GROUP_ID}`,
        {
          next: { revalidate: 30 },
        }
      )
    ).json();
    let websiteInfo = await (
      await fetch(
        `${process.env.BASE_URL}/api/group-information/${process.env.GROUP_ID}`,
        {
          next: { revalidate: 30 },
        }
      )
    ).json();
    let offers = await (
      await fetch(
        `${process.env.BASE_URL}/api/offers/${process.env.GROUP_ID}`,
        {
          next: { revalidate: 30 },
        }
      )
    ).json();

    return { topCategory, PrimaryCategory, websiteInfo, offers };
  } catch (err) {}
}

async function FAQsInfo() {
  let faqs = await (
    await fetch(
      // `${process.env.BASE_URL}/api/get-faqs/${process.env.GROUP_ID}`,
      `${process.env.BASE_URL}/api/get-faqs/${1}`,
      {
        next: { revalidate: 30 },
      }
    )
  ).json();

  return { faqs };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // topCategory
  const { topCategory, PrimaryCategory, websiteInfo, offers }: any =
    await getData();
  await generateMetadata(websiteInfo);
  const { faqs } = await FAQsInfo();

  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link
          rel="icon"
          href={
            websiteInfo?.logo
              ? `${process.env.BASE_URL}/images/${websiteInfo?.logo}`
              : "/favicon.ico"
          }
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>
        <NextTopLoader />
        <AuthProvider>
          <ReduxProvider>
            <TokenProvider>
              <OfferSlider offers={offers} />
              <Navbar
                websiteInfo={websiteInfo}
                topCategory={topCategory.topCategories}
                primaryCategories={PrimaryCategory.primaryCategories}
              />
              {children}
              <Footer
                topCategory={topCategory.topCategories}
                faqs={faqs?.faqs}
                websiteInfo={websiteInfo}
              />
              <ResponsiveMenu />
              <YourCart />
              <SiteModal />
              <ChattingBox/>
            </TokenProvider>
          </ReduxProvider>
          <Toaster position="top-center" reverseOrder={false} />
        </AuthProvider>
      </body>
    </html>
  );
}
