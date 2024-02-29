interface FilterItem {
  id: number;
  name: string;
}
export interface ColorInterface {
  id: number;
  name: string;
  color_code: string;
}

export const filterItem: FilterItem[] = [
  {
    id: 1,
    name: "colors",
  },
  {
    id: 4,
    name: "size",
  },
];

export const Colors: ColorInterface[] = [
  {
    id: 1,
    color_code: "bg-black",
    name: "Black",
  },
  {
    id: 2,
    color_code: "bg-[#FFD700]",
    name: "Gold",
  },
  {
    id: 3,
    color_code: "bg-[#E399A8]",
    name: "Milti",
  },
  {
    id: 4,
    color_code: "bg-[#FFC0CB]",
    name: "Pink",
  },
  {
    id: 5,
    color_code: "bg-[#FF0000]",
    name: "Red",
  },
  {
    id: 6,
    color_code: "bg-[#C0C0C0]",
    name: "Silva",
  },
  {
    id: 7,
    color_code: "bg-[#FFFFFF]",
    name: "White",
  },
];

export const sortbyProduct: FilterItem[] = [
  {
    id: 1,
    name: "Most Popular",
  },
  {
    id: 2,
    name: "Featured",
  },
  {
    id: 3,
    name: " A-Z ",
  },
  {
    id: 4,
    name: " Z-A",
  },
  {
    id: 5,
    name: " Price Low to High ",
  },
  {
    id: 6,
    name: " Price High to Low ",
  },
  {
    id: 7,
    name: "Oldest ",
  },
  {
    id: 8,
    name: "First ",
  },
  {
    id: 1,
    name: "Newest First ",
  },
];
export const styleitem = [
  { id: 1, name: "Ace" },
  { id: 2, name: "Ballet" },
  { id: 3, name: "Bolster" },
  { id: 4, name: "Weekender" },
  { id: 5, name: " Chelsea" },
  { id: 6, name: " Boot" },
  { id: 7, name: "Chelsea Utility " },
  { id: 8, name: "Chunky Sole " },
  { id: 9, name: "Chunky Sole Derby " },
  { id: 10, name: "Classic Derby " },
  { id: 11, name: "Derby Super Soft " },
  { id: 12, name: " Derby Utility" },
  { id: 13, name: " Fields Boot" },
  { id: 14, name: " Jelly" },
  { id: 15, name: " Kentu" },
  { id: 26, name: " Loafer" },
  { id: 17, name: " Overlay" },
  { id: 19, name: " Roman" },
  { id: 20, name: " Shoe Care" },
  { id: 21, name: " Sidecut" },
];

export const sizeitem = [
  { id: 1, name: "35" },
  { id: 2, name: "36" },
  { id: 3, name: "37" },
  { id: 4, name: "38" },
  { id: 5, name: " 39" },
  { id: 6, name: " 40" },
  { id: 7, name: "41" },
  { id: 8, name: "42" },
  { id: 9, name: "43" },
  { id: 10, name: "L " },
  { id: 11, name: "M" },
  { id: 12, name: "Qty" },
  { id: 13, name: " S" },
  { id: 14, name: " S-m" },
  { id: 15, name: " Xl" },
  { id: 26, name: " Xs" },
];
