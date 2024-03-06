import { ProductInterface } from "./Productinterface";

export interface CreateOrderinterface {
  group_id?: number | undefined; // Assuming group_id is of type string, adjust if necessary
  customer_id: number;
  total_amount: number; // Assuming total_amount is of type number, adjust if necessary
  total_quantity: number; // Assuming total_quantity is of type number, adjust if necessary
  address_id: number; // Assuming address_id is of type number, adjust if necessary
  items: ProductInterface[]; // Assuming cartItems is an array of CartItem, adjust if necessary
}

export interface SingleOrderInterface {
  code: string;
  status: string;
  order_info: {
    order_primary_id: number;
    order_invoice: number;
    total_quantity: number;
    status: number;
    total_amount: string;
    group_name: string;
    country: string;
    address: string;
    city: string;
    state: string;
    zip_code: number;
    country_code: string;
    mobile: string;
    customer_name: string;
  };
  data: {
    id: number;
    product_name: string;
    color_name: string;
    size_name: string;
    unit_price: string;
    quantity: number;
  }[];
}
