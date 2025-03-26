
export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  count: number;
  description?: string;
  featured?: boolean;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Phones',
    slug: 'phones',
    image: '/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png',
    count: 2,
    description: 'Latest smartphones with cutting-edge technology',
    featured: true
  },
  {
    id: '2',
    name: 'Computers',
    slug: 'computers',
    image: '/lovable-uploads/45ebd75e-e25e-46e1-96b5-9daae391609b.png',
    count: 3,
    description: 'Powerful laptops and desktops for work and play',
    featured: true
  },
  {
    id: '3',
    name: 'Gaming',
    slug: 'gaming',
    image: '/lovable-uploads/91d41278-66d1-416e-b483-6c1e8f071696.png',
    count: 2,
    description: 'High-performance gaming gear and accessories',
    featured: true
  },
  {
    id: '4',
    name: 'Headphones',
    slug: 'headphones',
    image: '/lovable-uploads/4eff34ef-0f14-4e40-9696-f75daac30877.png',
    count: 4,
    description: 'Premium audio experience for music lovers',
    featured: true
  },
  {
    id: '5',
    name: 'Monitors',
    slug: 'monitors',
    image: '/lovable-uploads/d28aea47-1734-4856-91f0-32ddbf86a52d.png',
    count: 2,
    description: 'Crystal-clear displays for work and entertainment',
    featured: true
  },
  {
    id: '6',
    name: 'Accessories',
    slug: 'accessories',
    image: '/lovable-uploads/06242eff-edaf-4101-aff1-9f5cef6a3a40.png',
    count: 8,
    description: 'Essential add-ons to enhance your tech',
    featured: true
  },
  {
    id: '7',
    name: 'Smart Home',
    slug: 'smart-home',
    image: '/lovable-uploads/ea1f1c80-c58d-43c5-966e-322a915ba87e.png',
    count: 3,
    description: 'Connected devices for the modern home',
    featured: true
  },
  {
    id: '8',
    name: 'Wearables',
    slug: 'wearables',
    image: '/lovable-uploads/332148fd-4cee-4cba-a628-e67fc706771e.png',
    count: 5,
    description: 'Smart watches and fitness trackers',
    featured: false
  },
  {
    id: '9',
    name: 'Cameras',
    slug: 'cameras',
    image: '/lovable-uploads/da4cc5ef-1e82-468b-a0b2-af39f932c9ee.png',
    count: 2,
    description: 'Capture your moments with professional quality',
    featured: false
  },
  {
    id: '10',
    name: 'Tablets',
    slug: 'tablets',
    image: '/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png',
    count: 3,
    description: 'Portable computing for work and entertainment',
    featured: false
  }
];

export const getCategories = () => {
  return categories;
};

export const getFeaturedCategories = () => {
  return categories.filter(category => category.featured);
};

export const getCategoryBySlug = (slug: string) => {
  return categories.find(category => category.slug === slug);
};
