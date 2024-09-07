import ShippingRoot from '@/components/checkout/Shipping/ShippingRoot'
import React from 'react'
export async function generateMetadata() {
  return {
    title: "Shipping" + " || " + "  ClaraCasa",
    description: " ",
  };
}
const page = () => {
  return (
    <>
      <ShippingRoot/>
    </>
  )
}

export default page
