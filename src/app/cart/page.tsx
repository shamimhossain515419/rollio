import CartPage from "@/components/cartPage/CartPage";
export async function generateMetadata() {
  return {
    title: "Your cart  ClaraCasa",
    description: " ",
  };
}
const page = () => {
  return <CartPage />;
};

export default page;
