
export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Phones',
    slug: 'phones',
    image: '/lovable-uploads/cea6eba3-a8fe-433b-a40f-2582e459b84b.png',
    count: 2
  },
  {
    id: '2',
    name: 'Computers',
    slug: 'computers',
    image: '/lovable-uploads/45ebd75e-e25e-46e1-96b5-9daae391609b.png',
    count: 3
  },
  {
    id: '3',
    name: 'Gaming',
    slug: 'gaming',
    image: '/lovable-uploads/91d41278-66d1-416e-b483-6c1e8f071696.png',
    count: 2
  },
  {
    id: '4',
    name: 'Headphones',
    slug: 'headphones',
    image: '/lovable-uploads/4eff34ef-0f14-4e40-9696-f75daac30877.png',
    count: 4
  },
  {
    id: '5',
    name: 'Monitors',
    slug: 'monitors',
    image: '/lovable-uploads/d28aea47-1734-4856-91f0-32ddbf86a52d.png',
    count: 2
  },
  {
    id: '6',
    name: 'Accessories',
    slug: 'accessories',
    image: '/lovable-uploads/06242eff-edaf-4101-aff1-9f5cef6a3a40.png',
    count: 8
  },
  {
    id: '7',
    name: 'Smart Home',
    slug: 'smart-home',
    image: '/lovable-uploads/ea1f1c80-c58d-43c5-966e-322a915ba87e.png',
    count: 3
  }
];

export const getCategories = () => {
  return categories;
};

export const getCategoryBySlug = (slug: string) => {
  return categories.find(category => category.slug === slug);
};
