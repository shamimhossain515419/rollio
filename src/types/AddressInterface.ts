export interface AddressInterface {
  id: number;
  logged_in_id: number;
  first_name: string;
  last_name: string | null;
  country: string;
  address: string;
  city: string;
  state: string;
  zip_code: number;
  country_code: string;
  mobile: string;
  preferred: number;
  created_at: string;
  updated_at: string;
}
