import { Category } from './types/category';
import { PRODUCTS } from './products';

export const CATEGORIES: Category[] = [
    {
        name: 'Laptops',
        slug: 'laptops',
        imageUrl:
           'https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg',
        products: PRODUCTS.filter(product => product.category.slug === 'laptops'), 
    },
    {
        name: 'Phones',
        slug: 'phones',
        imageUrl:
          'https://i.pinimg.com/1200x/66/27/18/66271842eb168181e9a1e27f533b30e0.jpg',
        products: PRODUCTS.filter(product => product.category.slug === 'phones'),
    },
    {
        name: 'Gaming',
        slug: 'gaming',
        imageUrl:
          'https://i.pinimg.com/736x/80/c1/51/80c151c5b1a12413bcda9158aa0ed2ee.jpg',
        products: PRODUCTS.filter(product => product.category.slug === 'gaming'),
    },
    {
        name: 'Accessories',
        slug: 'accessories',
        imageUrl:
          'https://i.pinimg.com/736x/57/71/2f/57712f7c1014b09b3a76437adb471a98.jpg',
        products: PRODUCTS.filter(product => product.category.slug === 'accessories'),
    }
]