export interface OrderDetailsInterface {
  order_primary_id: number;
  order_invoice: number;
  total_quantity: number;
  status: number;
  total_amount: string; // Assuming total_amount is represented as a string
  group_name: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zip_code: number;
  country_code: string;
  mobile: string;
  customer_name: string;
}
