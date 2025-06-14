import {
  Plus,
  Compass,
  Calendar,
  HelpCircle,
  Route,
  Users,
} from "lucide-react";

export const deals = [
  //NOTE:   images are from the GOOGLE and the descriptions of these elements , i have generated them using ai they are not written by me/dev or human written,
  {
    id: 1,
    image: "/demo-trip-1.jpeg",
    description:
      "Freshly engaged and seeking six days of pure bliss? Picture vibrant autumn gardens, private hot spring dips, and a hands-on sushi-making class this October—your perfect romantic escape awaits!",
  },
  {
    id: 2,
    image: "/demo-trip-2.jpeg",
    description:
      "I'm turning 30 with my five best friends! Plan four sun-soaked days of turquoise swims, epic villa pool parties, and dreamy sunset boat cruises this July.",
  },
  {
    id: 3,
    image: "/demo-trip-3.png",
    description:
      "Dad and I are chasing our dream of seeing the Big Five! Map out an eight-day road trip next month with whale watching, self-drive safaris, and cozy, budget-friendly lodges.",
  },
];

export const features = [
  {
    id: 1,
    icon: Plus,
    text: "Create new trip",
    color: "text-teal-600",
  },
  {
    id: 2,

    icon: Compass,
    text: "Inspire me to go",
    color: "text-orange-600",
  },
  {
    id: 3,

    icon: Calendar,
    text: "Weekend & Holidays",
    color: "text-green-600",
  },
  {
    id: 4,
    icon: HelpCircle,
    text: "How it works",
    color: "text-blue-600",
  },
];
export const scheduleFeatures = [
  //NOTE: the following description i have generated using the ai they are not human written or written by me/dev.
  {
    id: 1,
    icon: Route,
    title: "AI-Powered Route Optimization by Flyt.ai",
    description:
      "Flyt's routing system blends countless travel options, weaving together flights, trains, and car trips into a seamless, family-friendly, or romantic itinerary. Whether it's a Paris-Rome-Santorini honeymoon or a Berlin-Prague-Vienna family adventure, Flyt AI pinpoints the quickest routes, minimal layovers, and best-value fares, syncing effortlessly with your AI travel planner dashboard.",
  },
  {
    id: 2,
    icon: Calendar,
    title: "All-in-One Travel Organizer – Just Ask Flyt",
    description:
      "Say goodbye to clunky spreadsheets. Flyt.ai consolidates all your flights, hotels, tours, and dining reservations into a single, dynamic timeline. Want to add a sunset gondola ride or reschedule a kid-friendly museum stop? Just tell Flyt, and your AI trip planner instantly updates bookings, tickets, and budgets without the hassle of re-booking.",
  },
  {
    id: 3,
    icon: Users,
    title: "Collaborative Group & Family Planning Made Easy",
    description:
      "Let everyone have a say in the fun. Flyt Travel AI centralizes group chats and trip expenses, keeping families connected, couples stress-free, and honeymooners fully immersed in their multi-city journey.",
  },
];

//----------DATA for Footer Element--------------

//NOTE: I mean I can use /about and /contact for href but it will redirect towards the built-in nextjs 404 page as these pages are not defined so therefore I made the href for home redirect
export const companyLinksData = [
  {
    id: 1,
    href: "#",
    name: "About",
  },
  {
    id: 2,
    href: "#",
    name: "Contact",
  },
];
export const productLinksData = [
  {
    id: 1,
    href: "#",
    name: "Hotel",
  },
  {
    id: 2,
    href: "#",
    name: "Roam Around",
  },
  {
    id: 3,
    href: "#",
    name: "Partners",
  },
];

export const legalLinksData = [
  {
    id: 1,
    href: "#",
    name: "Privacy",
  },
  {
    id: 2,
    href: "#",
    name: "Terms",
  },
];

export const countryLinksData = [
  {
    id: 1,
    href: "#",
    name: "Portugal",
  },
  {
    id: 2,
    href: "#",
    name: "Spain",
  },
  {
    id: 3,
    href: "#",
    name: "Italy",
  },
  {
    id: 4,
    href: "#",
    name: "Indonesia",
  },
  {
    id: 5,
    href: "#",
    name: "Germany",
  },
  {
    id: 6,
    href: "#",
    name: "All Countries",
  },
];

export const planLinksData = [
  {
    id: 1,
    href: "#",
    name: "Couple Trip Plan",
  },
  {
    id: 2,
    href: "#",
    name: "Family Trip Plan",
  },
];

//--------Data for Trip Page----------
export const sites = [
  {
    id: 1,
    image: "/main-trip-7.webp",
    location: "Nice, France",
    author: "David Nice",
    type: "Beach view",
  },
  {
    id: 2,
    image: "/main-trip-6.webp",
    location: "Nice, France",
    author: "Robert Stunden",
    type: "Architecture",
  },
  {
    id: 3,
    image: "/main-trip-8.webp",
    location: "Nice, France",
    author: "Rita cliff aditishah",
    type: "Coastal view",
  },
  {
    id: 4,
    image: "/main-trip-9.webp",
    location: "Nice, France",
    author: "Rita cliff aditishah",
    type: "Coastal path",
  },
  {
    id: 5,
    image: "/main-trip-5.webp",
    location: "Nice, France",
    author: "Rita cliff",
    type: "Village view",
  },
];

export const journeys = [
  {
    id: 1,
    from: "Berlin, Germany",
    to: "Nice, France",
    date: "Tue, Jul 15",
    duration: "20h 8m - 1 stop",
    returnDate: "Thu, Jul 17",
    type: "car",
  },
  {
    id: 2,
    from: "Nice, France",
    to: "Cannes, France",
    date: "Fri, Jul 18",
    duration: "33 min - Non stop",
    returnDate: "Sat, Jul 19",
    type: "train",
  },
  {
    id: 3,
    from: "Cannes, France",
    to: "Saint-Tropez, France",
    date: "Sat, Jul 19",
    duration: "1h 16m - Non stop",
    returnDate: "Tue, Jul 22",
    type: "car",
  },
  {
    id: 4,
    from: "Saint-Tropez, France",
    to: "Berlin, Germany",
    date: "Tue, Jul 22",
    duration: "2h 20m - Non stop",
    returnDate: "",
    type: "car",
  },
];
//----------------------Schedules----------
export const des = [
  " Nice is a stunning city on the French Riviera known for it beautiful beaches vibrant old town, and luxury shopping It's perfect for families looking  to explore the cultural site sand enjoy water sports along the Mediterranean coast",

  "This exceptional promenade offers an enchanting historic combination alongside the beach. Representing the French and the Promenade des Anglais, along with facilities like a private beach area, fitness centre",
];
