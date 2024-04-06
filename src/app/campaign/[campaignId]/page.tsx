import Campaign from "@/components/campaign/Campaign";

const FetchData = async (id: string) => {
  const res = await fetch(
    process.env.BASE_URL +
      `/api/product/get-product-by-category/${process.env.GROUP_ID}/${id}`,
    {
      next: { revalidate: 300 },
    }
  );
  const products = await res.json();

  return { products };
};

const page = async ({ params }: any) => {
  const { products }: any = await FetchData(params?.campaignId);
  console.log(params?.campaignId);

  return (
    <div className="px-4 max-w-[1700px] mx-auto">
      <Campaign products={products?.data} />
    </div>
  );
};

export default page;
