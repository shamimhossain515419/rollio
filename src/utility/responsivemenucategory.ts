interface SubCategoryItem {
  id: number;
  name: string;
  subCategory: string[];
}

interface ResponsiveCategoryItem {
  id: number;
  name: string;
  subCategory: string[];
}

export const responsiveCategory: ResponsiveCategoryItem[] = [
  {
    id: 1,
    name: "women",
    subCategory: [
      "Shop all",
      "New Arrivals",
      "Best Sellers",
      "Flats",
      "Boots",
      "Derby",
      "Sandals",
      "Sneakers",
      "Accessories",
      "Gift Cards",
      "Access Sale",
    ],
  },
  {
    id: 2,
    name: "men",
    subCategory: [
      "Shop all",
      "New Arrivals",
      "Best Sellers",
      "Boots",
      "Derby",
      "Sandals",
      "Sneakers",
      "Flats",
      "Accessories",
      "Gift Cards",
      "Access Sale",
    ],
  },
  {
    id: 2,
    name: "Behidn Rollie",
    subCategory: [
      "About Us",
      "Design Process",
      "Edits",
      " Desserto Cactus Leather",
      " Rollie x Barbie",
      " Eco",
    ],
  },
];
