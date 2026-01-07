export const generateHotelSchema = (hotelData = {}) => {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Five Clover Hotel Monastery Road",
    description:
      "Luxury hotel accommodation at Monastery Road, Sangotedo, Lagos. Experience comfort and excellent service at Five Clover Hotel.",
    url: "https://fiveclovermonastery.fivecloverhotels.com",
    logo: "https://fiveclovermonastery.fivecloverhotels.com/five%20clover%20logo.webp",
    priceRange: "$$",
    starRating: {
      "@type": "Rating",
      ratingValue: "4.5",
      bestRating: "5",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "10, Monastery Road, by Novare Mall/ShopRite, Sangotedo, Lagos",
      addressLocality: "Lagos",
      postalCode: "100001",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.471022",
      longitude: "3.635581",
    },
    telephone: "+2349075105702",
    email: "info@fivecloverhotelmonastery.com",
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
      item: "https://fiveclovermonastery.fivecloverhotels.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Rooms",
      item: "https://fiveclovermonastery.fivecloverhotels.com/rooms",
    },
  ];

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.length > 0 ? items : defaultItems,
  };

  return JSON.stringify(breadcrumbList);
};
