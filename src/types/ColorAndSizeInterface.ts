export interface ColorInterface {
  id: number;
  name: string;
  color_code: string | null;
  created_at: string;
  updated_at: string;
}

export interface SizeInterface {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface ColorSizeInterface {
  status: string;
  code: string;
  colors: ColorInterface[];
  sizes: SizeInterface[];
}
