interface FaqQuestion {
  id: number;
  name: string;
  description: string;
}

interface FaqData {
  id: number;
  name: string;
  faqQuestion: FaqQuestion[];
}

export const faqData: FaqData[] = [
  {
    id: 1,
    name: "Returns & Refunds",
    faqQuestion: [
      {
        id: 1,
        name: "How can I return my order?",
        description:
          "Returns are free in Aus! To initiate your domestic return, select a return option below:",
      },
      {
        id: 2,
        name: "How can I return my order?",
        description:
          "Returns are free in Aus! To initiate your domestic return, select a return option below:",
      },
      {
        id: 3,
        name: "What is your returns policy?",
        description:
          "You can find more information about our returns policy here \n  For information about returns on pre-orders, please see the Pre-orders section in these FAQs.",
      },
    ],
  },
  {
    id: 1,
    name: "Delivery",
    faqQuestion: [
      {
        id: 1,
        name: "Do you ship worldwide?",
        description:
          "Yes! Please visit our International page for shipping & returns information for your country.",
      },
      {
        id: 2,
        name: "How much is postage?",
        description:
          "We express post all orders! Australia: We offer free express shipping on all orders over $60 and Free 30 day Returns. Estimated delivery times are next day delivery in metro areas for orders  placed before 2 pm AEST International: Please visit our International page for postage information for your country.",
      },
    ],
  },
  {
    id: 3,
    name: "Order",
    faqQuestion: [
      {
        id: 1,
        name: "I placed an order where is it?",
        description:
          "All items are dispatched from our warehouse within 48 hours of placing your order, during business hours. If you place an order on a Friday afternoon or over the weekend, it will be sent out on the  next business day. We are closed on public holidays, so please take this into account when placing   an order. You will receive your order within approximately 1-5 business days depending on your location within Australia and next business day for metro areas if the order is placed before 2pm   AEST Please note, during peak times there might be dispatch delays of up to 5 business days.   International orders are expected to be delivered in approx. 5-10 days, not including custom clearance delays. You can track your order using the tracking details which will be emailed to you  once the order has been dispatched. If you have opted for Same Day Delivery and have placed your order before 2:00pm, you will receive your goods between 5-9pm",
      },
      {
        id: 2,
        name: "I entered the wrong shipping address, how do I change it",
        description:
          " Please contact us as soon as possible to let us know. You can email us - hello@rollienation.com or give us a call during business hours on +611800 ROLLIE / 1800 765 543. It may not always be   possible for us to amend your order details, so please ensure all details provided are full and   correct at the time of order placement.",
      },
    ],
  },

  {
    id: 1,
    name: "Store",
    faqQuestion: [
      {
        id: 1,
        name: "Where can I find a store?",
        description:
          "Rollie Flagship Store \n  225-227 Gertrude street, Fitzroy 3065 \n   Monday-Saturday: IOam-6pmSunday: llam-5pm    \n  Click here for our 'Find A Store' page and simply type your suburb or city in the search bar and a list of stockists 50-100km away will be shown!",
      },
    ],
  },
  {
    id: 1,
    name: "Technical",
    faqQuestion: [
      {
        id: 1,
        name: "How can I return my order?",
        description:
          "Returns are free in Aus! To initiate your domestic return, select a return option below:",
      },
      {
        id: 2,
        name: "How can I return my order?",
        description:
          "Returns are free in Aus! To initiate your domestic return, select a return option below:",
      },
      {
        id: 3,
        name: "What is your returns policy?",
        description:
          "You can find more information about our returns policy here \n  For information about returns on pre-orders, please see the Pre-orders section in these FAQs.",
      },
    ],
  },
  {
    id: 1,
    name: "Partnerships",
    faqQuestion: [
      {
        id: 1,
        name: "How can I return my order?",
        description:
          "Returns are free in Aus! To initiate your domestic return, select a return option below:",
      },
      {
        id: 2,
        name: "How can I return my order?",
        description:
          "Returns are free in Aus! To initiate your domestic return, select a return option below:",
      },
      {
        id: 3,
        name: "What is your returns policy?",
        description:
          "You can find more information about our returns policy here \n  For information about returns on pre-orders, please see the Pre-orders section in these FAQs.",
      },
    ],
  },
  {
    id: 1,
    name: "Product & Stock",
    faqQuestion: [
      {
        id: 1,
        name: "How can I return my order?",
        description:
          "Returns are free in Aus! To initiate your domestic return, select a return option below:",
      },
      {
        id: 2,
        name: "How can I return my order?",
        description:
          "Returns are free in Aus! To initiate your domestic return, select a return option below:",
      },
      {
        id: 3,
        name: "What is your returns policy?",
        description:
          "You can find more information about our returns policy here \n  For information about returns on pre-orders, please see the Pre-orders section in these FAQs.",
      },
    ],
  },
  {
    id: 1,
    name: "Returns & Refunds",
    faqQuestion: [
      {
        id: 1,
        name: "How can I return my order?",
        description:
          "Returns are free in Aus! To initiate your domestic return, select a return option below:",
      },
      {
        id: 2,
        name: "How can I return my order?",
        description:
          "Returns are free in Aus! To initiate your domestic return, select a return option below:",
      },
      {
        id: 3,
        name: "What is your returns policy?",
        description:
          "You can find more information about our returns policy here \n  For information about returns on pre-orders, please see the Pre-orders section in these FAQs.",
      },
    ],
  },
];
