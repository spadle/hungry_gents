export const heroImages = [
  "/images/minified/background2.jpg",
  "/images/minified/background3.jpg",
  "/images/minified/background4.jpg",
  "/images/minified/background5.jpg",
];

export const aboutImage = "/images/biography.jpg";

export const aboutBio = [
  "Born and raised in Manhattan, Chef Kevin Thai discovered his calling in the kitchen at a young age. Drawn to the art of French gastronomy, he journeyed to Paris to study at the prestigious L'\u00e9cole Ferrandi Paris.",
  "His pursuit of excellence led him to the legendary three Michelin-star Restaurant Guy Savoy \u2014 one of the most revered dining rooms in the world. There, his craft was refined and his palate sharpened. An invitation to explore the pastry arts brought him under the tutelage of master p\u00e2tissier Julian Alvarez at The Peninsula Paris.",
  "With both savory and pastry mastery in his repertoire, Chef Thai earned opportunities across the globe \u2014 from Australia to Copenhagen, through kitchens such as the two Michelin-star Kadeau and the celebrated Dominique Ansel Bakery.",
  "Drawing on this world-class foundation, he assumed the role of Executive Chef for a prominent New York restaurant group, overseeing all culinary operations across its properties. Today, Chef Kevin devotes his artistry to private dining engagements, global consultancy, and curating bespoke culinary experiences.",
];

export const aboutBadges = [
  "Paris",
  "Guy Savoy",
  "3 Michelin Stars",
  "Peninsula Paris",
  "Executive Chef",
];

export interface MenuItem {
  name: string;
  description: string;
}

export interface CourseSection {
  course: string;
  items: MenuItem[];
}

export const menuCourses: CourseSection[] = [
  {
    course: "To Begin",
    items: [
      {
        name: "Orange Fennel Salad",
        description:
          "Baby Kale | Chorizo | Avocado | Parmesan | Black olives | Sourdough crostini | Citrus vinaigrette",
      },
      {
        name: "Cured Hamachi Crudo",
        description:
          "Wasabi cream | Soy & sesame onion dressing | Pickled cucumbers | Puffed rice | Ramp oil | Finger limes",
      },
    ],
  },
  {
    course: "The Interlude",
    items: [
      {
        name: "Fresh Corn & Stracciatella Cappelletti",
        description:
          "Seared Scallops | Fresh corn puree | Chanterelles | Charred corn | Parmesan emulsion | Popcorn | Black Truffle",
      },
    ],
  },
  {
    course: "The Main",
    items: [
      {
        name: "Caramelized Beef Tenderloin",
        description:
          "Honey nut puree | Summer market vegetables | Roquefort emulsion | Balsamic cipollini | Marionberry & pepper beef jus",
      },
    ],
  },
  {
    course: "To Finish",
    items: [
      {
        name: "Dessert Duo",
        description: "Earl grey chocolate chip carrot cake | S'Mores Tart",
      },
    ],
  },
];

export const galleryImages = [
  "/images/food5.jpg",
  "/images/food11.jpg",
  "/images/food7.jpg",
  "/images/food8.jpg",
  "/images/food12.jpg",
  "/images/food9.jpg",
  "/images/background9.jpg",
  "/images/food10.jpg",
  "/images/food15.jpg",
  "/images/food16.jpg",
  "/images/food13.jpg",
  "/images/food145.jpg",
];

export const galleryIntro =
  "Crafted with seasonal and hyper-seasonal ingredients, each dish reflects an intimate collaboration with local farms and artisan purveyors \u2014 a celebration of provenance, technique, and the fleeting beauty of the harvest.";

export const contactFields = [
  { name: "Name", type: "text", placeholder: "Enter your name" },
  { name: "Email", type: "email", placeholder: "Enter your email" },
  { name: "Phone number", type: "tel", placeholder: "Enter your phone number" },
  { name: "Subject", type: "text", placeholder: "Type the subject" },
  { name: "Message", type: "textarea", placeholder: "Type your message here..." },
];

export const navLinks = ["Home", "Menu", "Gallery", "About", "Contact"];
