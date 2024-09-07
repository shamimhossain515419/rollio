import AboutPage from "@/components/about/AboutPage";
import React from "react";
export async function generateMetadata() {
  return {
    title: "About Us" + " || " + "  ClaraCasa",
    description: " ",
  };
}
const page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default page;
