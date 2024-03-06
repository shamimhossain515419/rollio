import { topCategoryInterface } from "./CategoryInterface";
import { PrimaryCategoryInterface } from "./PrimaryCategoryInterface";
import { WebsiteInfoInterface } from "./WebsiteInfoInterface";

export interface NavbarInterface {
  primaryCategories: PrimaryCategoryInterface;
  topCategory: topCategoryInterface;
  websiteInfo: WebsiteInfoInterface;
}
