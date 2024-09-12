import React, { useEffect, useState } from "react";
const DeliveryAndReturn = () => {
  const [deliveryAndReturn, setDeliveryAndReturn] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDeliveryAndReturn = async () => {
      try {
        const res = await fetch(
          `${process.env.BASE_URL}/api/get-claracasa-delivery-and-return`,
          {
            next: { revalidate: 30 },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch delivery and return information");
        }
        const data = await res.json();
        setDeliveryAndReturn(data);
      } catch (error) {
        setError((error as Error).message); // Properly handle error message
      } finally {
        setLoading(false);
      }
    };

    fetchDeliveryAndReturn();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="">
      <div className="text-white"
        dangerouslySetInnerHTML={{
          __html: deliveryAndReturn?.data?.description,
        }}
      />
    </div>
  );
};

export default DeliveryAndReturn;
