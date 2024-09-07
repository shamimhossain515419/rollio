
import Contact from "@/components/contact/Contact";
import React from "react";
export async function generateMetadata() {
  return {
    title: "Contact Us" + " || " + "  ClaraCasa",
    description: " ",
  };
}
const page = () => {
  return (
   <div>
    <Contact/>
   </div>
  );
};

export default page;
