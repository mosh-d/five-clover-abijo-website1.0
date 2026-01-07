export const generateHotelSchema = (hotelData = {}) => {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Five Clover Hotel Abijo",
    description:
      "Luxury hotel accommodation at Abijo GRA, Lekki-Epe Expressway, Lagos. Experience comfort and excellent service at Five Clover Hotel.",
    url: "https://fivecloverabijo.fivecloverhotels.com",
    logo: "https://fivecloverabijo.fivecloverhotels.com/five%20clover%20logo.webp",
    priceRange: "$$",
    starRating: {
      "@type": "Rating",
      ratingValue: "4.5",
      bestRating: "5",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Abijo GRA, behind Rainoil Filling Station, Lekki-Epe Expressway, Lagos",
      addressLocality: "Lagos",
      postalCode: "100001",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.460612571256751",
      longitude: "3.6746963994906077",
    },
    telephone: "+2349159477805",
    email: "info@fivecloverhotelabijo.com",
    sameAs: [
      "https://www.facebook.com/fivecloverhotel",
      "https://www.instagram.com/fivecloverhotel",
      "https://twitter.com/fivecloverhotel",
      "https://www.fivecloverhotels.com",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  return JSON.stringify({ ...defaultData, ...hotelData });
};

export const generateBreadcrumbSchema = (items = []) => {
  const defaultItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://fivecloverabijo.fivecloverhotels.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Rooms",
      item: "https://fivecloverabijo.fivecloverhotels.com/rooms",
    },
  ];

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.length > 0 ? items : defaultItems,
  };

  return JSON.stringify(breadcrumbList);
};
