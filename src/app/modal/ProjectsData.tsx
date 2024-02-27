import ProductClass from "./ProductClass";

const products: ProductClass[] = [
  new ProductClass(
    1,
    "images/wandering.jpeg",
    "WanderingElixirs.com",
    "This project is a custom-designed e-commerce platform tailored for a client in the herbal medicine and mushroom tincture niche. On the backend, the site leverages Strapi, offering the client an intuitive interface to seamlessly manage product inventory—enabling add, edit, and delete functionalities.\n\n The frontend employs ReactJS for a responsive user experience, with Redux overseeing the state management of the shopping cart. For payment processing, the platform integrates Stripe's secure checkout system. A specialized webhook is also incorporated to sync with the inventory management system, thereby eliminating the possibility of customers ordering out-of-stock items.\n\n In terms of aesthetics, the styling is executed through JavaScript using Material-UI (MUI) React components, negating the need for external stylesheets.",
    10.99
  ),
  new ProductClass(
    1,
    "images/reddit.jpeg",
    "Minimal Reddit",
    "This project is a streamlined Reddit client, designed to offer a simplified, yet effective, user experience. Built on a ReactJS frontend, the application employs the Redux Toolkit to handle the state management of the search functionality.\n\n Users can easily search for and view recent posts from any subreddit of their choice, all through a straightforward search bar interface. By utilizing asynchronous fetch requests in tandem with Redux, the client delivers a responsive and efficient single-page web application.",
    15.99
  ),
  // new ProductClass(
  //     1,
  //     "images/sereniTea.webp",
  //     "SereniTea",
  //     "A calming tea blend designed for relaxation and stress relief, featuring ingredients like chamomile, lavender, and lemon balm. The image evokes a sense of calm and tranquility, showing a warm, inviting cup of tea surrounded by soothing herbs, with steam rising gently to convey warmth and peace.",
  //     12.99
  // ),
  // new ProductClass(
  //     1,
  //     "images/vitalityBoost.webp",
  //     "Vitality Boost",
  //     "An energizing essential oil blend aimed at invigorating the senses, with natural ingredients like peppermint, orange, and eucalyptus. The vibrant colors and imagery of the ingredients, alongside a sleek, modern bottle, capture the essence of vitality and energy.",
  //     9.99
  // ),
  // new ProductClass(
  //     1,
  //     "images/glowEssence.webp",
  //     "Glow Essence",
  //     "A luxurious skincare serum that uses natural botanicals to enhance skin radiance and health. The image reflects the essence of natural beauty and rejuvenation, showcasing botanical ingredients and a sleek, elegant bottle.",
  //     14.99
  // ),
];

export default products;
