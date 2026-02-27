export const heroImages = [
  "/images/minified/background2.jpg",
  "/images/minified/background3.jpg",
  "/images/minified/background4.jpg",
  "/images/minified/background5.jpg",
];

export const aboutImage = "/images/biography.jpg";

export const aboutBio = [
  "Chef Kevin Thai found his culinary passion at a young age growing up in the New York City borough of Manhattan. This led him to move to Paris, where he attended the renowned culinary academy, L'école Ferrandi Paris.",
  "His talents led him into cooking at one of Paris' best and most respected restaurants, the three Michelin-star Restaurant Guy Savoy. There, his culinary talents were further cultivated. He was encouraged to explore pastry arts which led him to work for top pastry chef Julian Alvarez at the Peninsula Paris.",
  "Adding pastry to his arsenal gave him a competitive edge and earned him a wonderful opportunity to travel around the world to places such as Australia and Copenhagen, cooking at incredible establishments like Two Michelin-star restaurant Kadeau, and Dominique Ansel Bakery.",
  "Under the tutelage of these great chefs, he took on an executive chef position for a major New York restaurant group, running and overseeing all culinary aspects of its two restaurants. Currently, Chef Kevin spends his time consulting around the globe, performing select private chef engagements, and catering choice events.",
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
    course: "First Courses",
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
    course: "Second Course",
    items: [
      {
        name: "Fresh Corn & Stracciatella Cappelletti",
        description:
          "Seared Scallops | Fresh corn puree | Chanterelles | Charred corn | Parmesan emulsion | Popcorn | Black Truffle",
      },
    ],
  },
  {
    course: "Third Course",
    items: [
      {
        name: "Caramelized Beef Tenderloin",
        description:
          "Honey nut puree | Summer market vegetables | Roquefort emulsion | Balsamic cipollini | Marionberry & pepper beef jus",
      },
    ],
  },
  {
    course: "Dessert",
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
  "My cuisine is crafted with seasonal and hyper-seasonal ingredients, focusing on collaboration with local farms and purveyors to create delicious, mindful dishes.";

export const contactFields = [
  { name: "Name", type: "text", placeholder: "Enter your name" },
  { name: "Email", type: "email", placeholder: "Enter your email" },
  { name: "Phone number", type: "tel", placeholder: "Enter your phone number" },
  { name: "Subject", type: "text", placeholder: "Type the subject" },
  { name: "Message", type: "textarea", placeholder: "Type your message here..." },
];

export const navLinks = ["Home", "Menu", "Gallery", "About", "Contact"];
