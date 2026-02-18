import { MenuItem, Testimonial } from './types';

export const APP_NAME = "Dace's Samgyeopsal";
export const TAGLINE = "Samgyup na pang masa na mabu-BUCHOG ka hindi lang sa LASA pati na rin sa PRESYONG abot kaya!!";
export const ADDRESS = "Brgy. Banago (Beside Gasso), Nagcarlan, Philippines";
export const PHONE_NUMBER = "0938 475 2514";
export const FACEBOOK_URL = "https://www.facebook.com/DaceSamgyeopsal/";
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/vfNzyPK3MiuhAPQB8";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Unlimited Pork",
    description: "Premium sliced pork belly marinated in our secret sauce. Comes with unlimited side dishes, rice, and soup.",
    price: "₱299",
    imageUrl: "https://picsum.photos/400/300?random=1",
    popular: true
  },
  {
    id: 2,
    name: "Pork & Beef Set",
    description: "The best of both worlds! Thinly sliced beef brisket and pork belly ready for the grill.",
    price: "₱349",
    imageUrl: "https://picsum.photos/400/300?random=2",
    popular: true
  },
  {
    id: 3,
    name: "Spicy Marinated Chicken",
    description: "Tender chicken chunks marinated in a spicy Korean gochujang sauce.",
    price: "₱289",
    imageUrl: "https://picsum.photos/400/300?random=3",
    popular: false
  },
  {
    id: 4,
    name: "Kimchi Fried Rice",
    description: "Classic bokkeumbap with spicy kimchi, topped with a fried egg.",
    imageUrl: "https://picsum.photos/400/300?random=4",
    popular: false
  },
  {
    id: 5,
    name: "Tteokbokki",
    description: "Chewy rice cakes simmered in a sweet and spicy sauce with fish cakes.",
    imageUrl: "https://picsum.photos/400/300?random=5",
    popular: true
  },
  {
    id: 6,
    name: "Korean Side Dishes",
    description: "Kimchi, Potato Marble, Pickled Radish, Fish Cake, and more!",
    imageUrl: "https://picsum.photos/400/300?random=6",
    popular: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Maria Santos",
    comment: "Sobrang sulit! Ang sarap ng marinades nila at ang bilis ng refill.",
    rating: 5
  },
  {
    id: 2,
    name: "John Reyes",
    comment: "Perfect place for barkada hangouts. Presyong abot kaya talaga!",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah L.",
    comment: "Love the cheese dip and the spicy pork. Will come back again!",
    rating: 4
  }
];