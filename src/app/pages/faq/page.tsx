import Faqs from "@/components/faq/Faqs";

async function getData() {
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

const Page = async () => {
  const { faqs }: any = await getData();
  
  return <Faqs faqs={faqs?.faqs} />;
};

export default Page;
