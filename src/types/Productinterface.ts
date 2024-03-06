export interface ProductInterface {
  id: string;
  name: string;
  purchase_price: string;
  sale_price: number;
  discount: string;
  discount_type: number;
  brand_id: number;
  top_category_id: number;
  primary_category_id: number;
  secondary_category_id: number;
  tertiary_category_id: number;
  group_id: number;
  photos: string[] | any;
  totalPrice: number;
  extraIngredients?: any;
  quantity: number;
  created_at: string;
  updated_at: string;
}
