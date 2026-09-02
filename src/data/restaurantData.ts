import heroKarahiImg from '../assets/images/hero_karahi_1788347723540.jpg';
import muttonKarahiImg from '../assets/images/dish_mutton_karahi_1788347746479.jpg';
import beefKarahiImg from '../assets/images/dish_beef_karahi_1788347798183.jpg';
import bbqGrillImg from '../assets/images/dish_bbq_grill_1788347762162.jpg';
import tandoorNaanImg from '../assets/images/about_tandoor_naan_1788347778254.jpg';
import restaurantAmbianceImg from '../assets/images/restaurant_ambiance_1788347819183.jpg';
import biryaniRiceImg from '../assets/images/dish_biryani_rice_1788347845510.jpg';
import { GalleryItem, MenuItem, RestaurantInfo } from '../types';

export const restaurantImages = {
  heroKarahi: heroKarahiImg,
  muttonKarahi: muttonKarahiImg,
  beefKarahi: beefKarahiImg,
  bbqGrill: bbqGrillImg,
  tandoorNaan: tandoorNaanImg,
  restaurantAmbiance: restaurantAmbianceImg,
  biryaniRice: biryaniRiceImg,
};

export const restaurantInfo: RestaurantInfo = {
  name: 'Harika Butt Karahi',
  tagline: 'Authentic Karahi. Bold Pakistani Flavor.',
  address: {
    building: 'Potohar Plaza',
    street: 'Fazal e Haq Road',
    area: 'Blue Area',
    city: 'Islamabad',
    country: 'Pakistan',
    full: 'Potohar Plaza, Fazal e Haq Road, Blue Area, Islamabad, Pakistan',
  },
  phones: ['0308 0929999', '0311 8774979'],
  whatsapp: '+92 308 0929999',
  whatsappLink: 'https://wa.me/923080929999?text=Hello%20Harika%20Butt%20Karahi%2C%20I%20would%20like%20to%20inquire%20about%20your%20menu%20and%20dining.',
  facebook: 'https://www.facebook.com/ButtKarahiWaseemBlueArea/',
  instagram: 'https://www.instagram.com/p/CZjdsByK0Na/',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Harika+Butt+Karahi+Potohar+Plaza+Fazal+e+Haq+Road+Blue+Area+Islamabad',
  timings: {
    days: 'Monday - Sunday',
    hours: '12:00 PM - 01:00 AM',
  },
};

export const signatureDishes: MenuItem[] = [
  {
    id: 'sig-chicken-karahi',
    name: 'Special Chicken Karahi',
    category: 'karahi',
    description: 'Fresh chicken seared in traditional iron wok with ripe tomatoes, green chillies, ginger slivers, and rich aromatic Pakistani spices.',
    tag: 'House Special',
    isSignature: true,
    image: heroKarahiImg,
    serving: 'Available in Half / Full Karahi',
  },
  {
    id: 'sig-mutton-karahi',
    name: 'Desi Mutton Karahi',
    category: 'karahi',
    description: 'Tender fresh bone-in mutton slow-cooked in pure desi butter or ghee, bursting with authentic robust Punjabi & Shinwari spices.',
    tag: 'Chef Recommendation',
    isSignature: true,
    image: muttonKarahiImg,
    serving: 'Available in Half / Full Karahi',
  },
  {
    id: 'sig-beef-karahi',
    name: 'Traditional Beef Karahi',
    category: 'karahi',
    description: 'Succulent cuts of beef simmered with crushed black pepper, fresh garlic, roasted cumin, and thick tomato masala.',
    tag: 'Authentic Flavor',
    isSignature: true,
    image: beefKarahiImg,
    serving: 'Available in Half / Full Karahi',
  },
  {
    id: 'sig-bbq-platter',
    name: 'Charcoal BBQ Platter',
    category: 'bbq',
    description: 'A smoking assortment of freshly grilled beef seekh kababs, tender chicken tikka boti, served with mint raita and red onion rings.',
    tag: 'Live Charcoal Grill',
    isSignature: true,
    image: bbqGrillImg,
    serving: 'Served with Raita & Fresh Salad',
  },
  {
    id: 'sig-tandoori-naan',
    name: 'Fresh Roghni & Garlic Naan',
    category: 'tandoor',
    description: 'Clay-tandoor baked fluffy flatbreads glazed with melted desi butter, toasted sesame seeds, and aromatic crushed garlic.',
    tag: 'Fresh from Tandoor',
    isSignature: true,
    image: tandoorNaanImg,
    serving: 'Baked Live Upon Order',
  },
  {
    id: 'sig-biryani-special',
    name: 'Aromatic Special Biryani',
    category: 'rice',
    description: 'Long-grain basmati rice layered with spiced meat, golden fried onions, saffron strands, and fresh mint leaves.',
    tag: 'Traditional Rice',
    isSignature: true,
    image: biryaniRiceImg,
    serving: 'Served with Fresh Raita',
  },
];

export const menuCategories = [
  { id: 'all', name: 'All Dishes' },
  { id: 'karahi', name: 'Karahi Delicacies' },
  { id: 'bbq', name: 'Charcoal BBQ' },
  { id: 'tandoor', name: 'Tandoor & Breads' },
  { id: 'rice', name: 'Rice Specialties' },
  { id: 'sides', name: 'Salad & Raita' },
  { id: 'drinks', name: 'Beverages & Chai' },
];

export const fullMenuList: MenuItem[] = [
  // Karahi
  {
    id: 'k-1',
    name: 'Butt Special Chicken Karahi',
    category: 'karahi',
    description: 'Signature wok-prepared chicken in rich tomato, ginger, and green chilli masala.',
    serving: 'Half / Full',
    tag: 'Bestseller',
  },
  {
    id: 'k-2',
    name: 'Desi Ghee Mutton Karahi',
    category: 'karahi',
    description: 'Succulent mutton cuts slow-braised in pure desi ghee with authentic Butt Karahi blend.',
    serving: 'Half / Full',
    tag: 'Popular',
  },
  {
    id: 'k-3',
    name: 'Shinwari Chicken Karahi',
    category: 'karahi',
    description: 'Tender chicken prepared Shinwari-style with fresh tomatoes, green chillies, and black pepper.',
    serving: 'Half / Full',
  },
  {
    id: 'k-4',
    name: 'White Chicken Karahi',
    category: 'karahi',
    description: 'Velvety creamy karahi infused with mild spices, thick cream, yogurt, and crushed green chillies.',
    serving: 'Half / Full',
    tag: 'Mild & Rich',
  },
  {
    id: 'k-5',
    name: 'Traditional Beef Karahi',
    category: 'karahi',
    description: 'Tender prime beef seared in high flame with coarse crushed coriander and fresh ginger.',
    serving: 'Half / Full',
  },
  {
    id: 'k-6',
    name: 'Namkeen Mutton Gosht',
    category: 'karahi',
    description: 'Authentic Peshawari-style salty tender mutton cooked gently in its natural juices with coarse salt.',
    serving: 'Half / Full',
  },

  // BBQ
  {
    id: 'bbq-1',
    name: 'Charcoal Beef Seekh Kabab',
    category: 'bbq',
    description: 'Fine minced beef seasoned with Pakistani herbs, skewered and grilled over charcoal.',
    serving: '4 Skewers',
    tag: 'Must Try',
  },
  {
    id: 'bbq-2',
    name: 'Chicken Malai Boti',
    category: 'bbq',
    description: 'Melt-in-mouth boneless chicken cubes marinated in heavy cream, green chillies, and white pepper.',
    serving: 'Plate',
  },
  {
    id: 'bbq-3',
    name: 'Chicken Tikka (Breast / Leg)',
    category: 'bbq',
    description: 'Quarter chicken marinated in fiery red spices and charcoal roasted to crispy perfection.',
    serving: 'Piece',
  },
  {
    id: 'bbq-4',
    name: 'Reshmi Kabab',
    category: 'bbq',
    description: 'Delicate minced chicken blended with almond paste, cream, and subtle house spices.',
    serving: '4 Skewers',
  },

  // Tandoor
  {
    id: 'tan-1',
    name: 'Special Roghni Naan',
    category: 'tandoor',
    description: 'Fluffy fermented leavened bread brushed with desi butter and topped with golden sesame seeds.',
    serving: 'Fresh from Tandoor',
    tag: 'Hot Favorite',
  },
  {
    id: 'tan-2',
    name: 'Garlic Butter Naan',
    category: 'tandoor',
    description: 'Hot clay-baked bread stuffed with crushed garlic and coated with salted butter.',
    serving: 'Fresh from Tandoor',
  },
  {
    id: 'tan-3',
    name: 'Kalonji Naan',
    category: 'tandoor',
    description: 'Traditional bread sprinkled with nigella seeds for an aromatic earthen bite.',
    serving: 'Fresh from Tandoor',
  },
  {
    id: 'tan-4',
    name: 'Tandoori Roti / Khameeri Roti',
    category: 'tandoor',
    description: 'Whole wheat traditional flatbread baked fresh on clay tandoor walls.',
    serving: 'Fresh from Tandoor',
  },

  // Rice
  {
    id: 'rice-1',
    name: 'Special Chicken Biryani',
    category: 'rice',
    description: 'Fragrant saffron basmati rice steamed with spiced chicken and plum masala.',
    serving: 'Single / Double',
  },
  {
    id: 'rice-2',
    name: 'Zeera Basmati Rice',
    category: 'rice',
    description: 'Steamed premium long-grain rice tempered with fragrant cumin seeds and whole cloves.',
    serving: 'Single Bowl',
  },

  // Sides
  {
    id: 'side-1',
    name: 'Fresh Kachumber Salad',
    category: 'sides',
    description: 'Diced cucumbers, crisp red onions, ripe tomatoes tossed with lemon juice and chaat masala.',
    serving: 'Fresh Bowl',
  },
  {
    id: 'side-2',
    name: 'Fresh Mint & Coriander Raita',
    category: 'sides',
    description: 'Chilled thick curd blended with fresh garden mint, coriander, and roasted cumin powder.',
    serving: 'Bowl',
  },
  {
    id: 'side-3',
    name: 'Traditional Mixed Spicy Achar',
    category: 'sides',
    description: 'Homemade mango, chilli, and lemon pickle in mustard oil.',
    serving: 'Small Dish',
  },

  // Drinks
  {
    id: 'dr-1',
    name: 'Fresh Mint Lemonade',
    category: 'drinks',
    description: 'Crushed ice, fresh mint sprigs, freshly squeezed lemon juice, and black salt splash.',
    serving: 'Chilled Glass',
    tag: 'Refreshing',
  },
  {
    id: 'dr-2',
    name: 'Traditional Sweet / Salty Lassi',
    category: 'drinks',
    description: 'Classic Punjabi thick yogurt drink churned with ice, available sweet or salty.',
    serving: 'Clay Glass',
  },
  {
    id: 'dr-3',
    name: 'Special Doodh Patti Chai',
    category: 'drinks',
    description: 'Strong Pakistani milk tea brewed with crushed green cardamom and black tea leaves.',
    serving: 'Hot Cup',
    tag: 'Post-Meal Favorite',
  },
  {
    id: 'dr-4',
    name: 'Soft Drinks & Mineral Water',
    category: 'drinks',
    description: 'Choice of chilled beverages (Pakola, Cola, Lemon-Lime) and bottled spring water.',
    serving: 'Chilled Can / Bottle',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Sizzling Chicken Karahi',
    category: 'Karahi',
    image: heroKarahiImg,
    caption: 'Freshly prepared wok karahi garnished with julienned ginger and fragrant coriander.',
  },
  {
    id: 'g-2',
    title: 'Rich Mutton Karahi',
    category: 'Karahi',
    image: muttonKarahiImg,
    caption: 'Tender bone-in mutton simmered in rich tomato gravy with fresh green chillies.',
  },
  {
    id: 'g-3',
    title: 'Traditional Tandoor Naan',
    category: 'Tandoor',
    image: tandoorNaanImg,
    caption: 'Golden sesame seed Roghni Naan pulled fresh and hot from the clay tandoor.',
  },
  {
    id: 'g-4',
    title: 'Charcoal Mixed BBQ',
    category: 'BBQ',
    image: bbqGrillImg,
    caption: 'Charred skewers of beef seekh kabab and chicken tikka with mint raita.',
  },
  {
    id: 'g-5',
    title: 'Spiced Beef Karahi',
    category: 'Karahi',
    image: beefKarahiImg,
    caption: 'Hearty spiced beef cooked to perfection with crushed coriander and peppers.',
  },
  {
    id: 'g-6',
    title: 'Warm Restaurant Atmosphere',
    category: 'Dining',
    image: restaurantAmbianceImg,
    caption: 'Welcoming dining ambiance for families and friends in Blue Area, Islamabad.',
  },
  {
    id: 'g-7',
    title: 'Fragrant Saffron Biryani',
    category: 'Rice',
    image: biryaniRiceImg,
    caption: 'Steamed basmati rice with aromatic herbs, tender meat, and saffron aroma.',
  },
];
