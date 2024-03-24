import { ProductInterface } from "./Productinterface";

export interface CartInitialStateInterface {
  cartItems: ProductInterface[];
  totalQuantity: number;
  totalAmount: number;
}
