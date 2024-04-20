import Campaign from "@/components/campaign/Campaign";

const FetchData = async (id: string) => {
  const res = await fetch(
    process.env.BASE_URL + `/api/campaigns/${process.env.GROUP_ID}/${id}`,
    {
      next: { revalidate: 300 },
    }
  );
  const products = await res.json();

  return { products };
};

const page = async ({ params }: any) => {
  const { products }: any = await FetchData(params?.campaignId);

  return (
    <div className="px-4 max-w-[1700px] mx-auto">
      <h1 className="font-bold text-[30px] text-center">
        {products?.offer?.name}
      </h1>
      <Campaign products={products?.products} />
    </div>
  );
};

export default page;
