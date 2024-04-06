import Card from "../utilityComponent/card/Card";

const Campaign = ({ products }: any) => {
  return (
    <div className=" mt-10 grid  sm:grid-cols-2  lg:grid-cols-3  gap-4 md:gap-7">
      {products?.map((product: any, i: number) => (
        <Card key={i} product={product} />
      ))}
    </div>
  );
};

export default Campaign;
