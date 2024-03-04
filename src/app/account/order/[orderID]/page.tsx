"use client";
import OrderDetail from "@/components/orderDetail/OrderDetail";
import PrivateRoute from "@/components/privateRoute/PrivateRoute";

import React from "react";

const page = ({ params }: any) => {
  return (
    <PrivateRoute>
      <OrderDetail order_id={params?.orderID} />
    </PrivateRoute>
  );
};

export default page;
