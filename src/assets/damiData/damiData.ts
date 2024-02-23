export interface menuInterface {
  id: number;
  name: string;
}

export const menuItems: menuInterface[] = [
  { id: 1, name: "Women" },
  { id: 2, name: "Men" },
  { id: 3, name: "Behind Rollie" },
];

export interface viderSliderInterface {
  id: number;
  image: string;
  image2: string;
  video: string;
}

export const videoSliderData: viderSliderInterface[] = [
  {
    id: 1,
    image:
      "https://www.rollienation.com/cdn/shop/files/pag-2_b1fc7b84-256c-424e-bcc4-ce5bca332786_80x.jpg?v=1657255102",
    image2:
      "https://www.rollienation.com/cdn/shop/files/Homepage-Focus-Image-Pace-Classic-White-Gum_414x.png?v=1700632354",
    video:
      "https://cdn.shopify.com/videos/c/o/v/c64935b2e92546cbacdd13170c55b6b3.mp4",
  },
  {
    id: 2,
    image:
      "https://www.rollienation.com/cdn/shop/files/pag-3_80x.jpg?v=1657254387",
    image2:
      "https://www.rollienation.com/cdn/shop/files/Homepage-Focus-Image-Weekender-Eco_17f6ac46-18df-49d2-a57a-6d443d0c18c7_414x.png?v=1680505243",
    video:
      "https://cdn.shopify.com/videos/c/o/v/1e2887f48e134219b2d6e53259515c59.mp4",
  },
  {
    id: 3,
    image:
      "https://www.rollienation.com/cdn/shop/files/pag-1_80x.jpg?v=1657255024",
    image2:
      "https://www.rollienation.com/cdn/shop/files/Weekender-White-Classic_414x.png?v=1660172306",
    video:
      "https://cdn.shopify.com/videos/c/o/v/c64935b2e92546cbacdd13170c55b6b3.mp4",
  },
];

// product
// interface productInterface {
//   id: number;
//   name: string;
//   price: number;
//   dis: string;
//   colors: [
//     {
//       image: string;
//     }
//   ];
//   sizes: {
//     name: string;
//     size: number;
//   };
// }

export const productData = {
  id: 1,
  name: "Kentu All White",
  price: 21400.0,
  dis: "Sneaker go-to? Kentu. Eye-catching cool meets life-altering comfort. Your everyday sneaker with a wild side combining mixed materials of suede, nylon and leather. Hit the streets or even a hike with undeniable bounce - ready for anything.",
  images: [
    {
      image:
        "https://www.rollienation.com/cdn/shop/files/SC01452_KentuAllWhite_H_1200x.jpg?v=1705475187",
    },
    {
      image:
        "https://www.rollienation.com/cdn/shop/files/Shot_29_KentuAllWhite_3519_Online_1200x.jpg?v=1706159376",
    },
    {
      image:
        "https://www.rollienation.com/cdn/shop/files/Shot_29_KentuAllWhite_3572_Online_1200x.jpg?v=1706159376",
    },
    {
      image:
        "https://www.rollienation.com/cdn/shop/files/Shot_29_KentuAllWhite_3592_Online_1200x.jpg?v=1706159376",
    },
    {
      image:
        "https://www.rollienation.com/cdn/shop/files/SC01452_KentuAllWhite_C1_1200x.jpg?v=1706159376",
    },
    {
      image:
        "https://www.rollienation.com/cdn/shop/files/Shot_29_KentuAllWhite_3629_Online_1200x.jpg?v=1706159376",
    },
    {
      image:
        "https://www.rollienation.com/cdn/shop/files/SC01452_KentuAllWhite_S2_1200x.jpg?v=1706159376",
    },
    {
      image:
        "https://www.rollienation.com/cdn/shop/files/SC01452_KentuAllWhite_C2_1200x.jpg?v=1706159318",
    },
    {
      image:
        "https://www.rollienation.com/cdn/shop/files/SC01452_KentuAllWhite_S_1200x.jpg?v=1706159318",
    },
    {
      image:
        "https://www.rollienation.com/cdn/shop/files/SC01452_KentuAllWhite_T_1200x.jpg?v=1706159318",
    },
    {
      image:
        "https://www.rollienation.com/cdn/shop/files/SC01452_KentuAllWhite_O_1200x.jpg?v=1706159318",
    },
  ],
  colors: [
    {
      image:
        "https://www.rollienation.com/cdn/shop/files/SC01450_KentuGre_VegTan_H_76x.jpg?v=1705474702",
    },
    {
      image:
        "https://www.rollienation.com/cdn/shop/files/SC01452_KentuAllWhite_H_76x.jpg?v=1705475187",
    },
    {
      image:
        "https://www.rollienation.com/cdn/shop/files/SC01451_KentuSafari_H_76x.jpg?v=1705474917",
    },
  ],
  sizes: [
    {
      id: 1,
      name: "4 US",
      size: 10,
    },
    {
      id: 2,
      name: "5 US",
      size: 8,
    },
    {
      id: 3,
      name: "4 US",
      size: 10,
    },
    {
      id: 4,
      name: "5 US",
      size: 8,
    },
    {
      id: 5,
      name: "4 US",
      size: 10,
    },
    {
      id: 6,
      name: "5 US",
      size: 8,
    },
  ],
};
