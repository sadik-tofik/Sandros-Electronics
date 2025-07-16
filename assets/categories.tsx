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
          'https://images.pexels.com/photos/40739/mobile-phone-smartphone-tablet.jpeg',
        products: PRODUCTS.filter(product => product.category.slug === 'phones'),
    },
    {
        name: 'Gaming',
        slug: 'gaming',
        imageUrl:
          'https://images.pexels.com/photos/40739/mobile-phone-smartphone-tablet.jpeg',
        products: PRODUCTS.filter(product => product.category.slug === 'gaming'),
    },
    {
        name: 'Accessories',
        slug: 'accessories',
        imageUrl:
          'https://images.pexels.com/photos/40739/mobile-phone-smartphone-tablet.jpeg',
        products: PRODUCTS.filter(product => product.category.slug === 'accessories'),
    }
]