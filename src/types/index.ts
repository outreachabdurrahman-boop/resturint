export interface MenuItem {
  id: string;
  name: string;
  category: 'karahi' | 'bbq' | 'tandoor' | 'rice' | 'sides' | 'drinks';
  description: string;
  tag?: string;
  isSignature?: boolean;
  image?: string;
  serving?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  address: {
    building: string;
    street: string;
    area: string;
    city: string;
    country: string;
    full: string;
  };
  phones: string[];
  whatsapp: string;
  whatsappLink: string;
  facebook: string;
  instagram: string;
  googleMapsUrl: string;
  timings: {
    days: string;
    hours: string;
  };
}
