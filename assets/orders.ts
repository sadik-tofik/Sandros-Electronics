import { Order } from './types/order';

export const ORDERS: Order[] = [
  {
    id: '1',
    item: 'Order 1',
    details: 'Details about order 1',
    status: 'Pending',
    slug: 'order-1',
    date: '2025-07-15',
    items: [
        {
            id: 1,
            title: 'Product 1',
            slug: 'product-1',
            imageUrl: ['url1'],
            price: 10.0,
            heroImage: require('../assets/images/i-phone-1.jpg'),
        },
        {
            id: 2,
            title: 'Product 2',
            slug: 'product-2',
            imageUrl: ['url2'],
            price: 20.0,
            heroImage: require('../assets/images/head-set-1.jpg'),
        },
    ],
  },
  {
    id: '2',
    item: 'Order 2',
    details: 'Details about order 2',
    status: 'Completed',
    slug: 'order-2',
    date: '2025-07-16',
    items: [
        {
            id: 3,
            title: 'Product 3',
            slug: 'product-3',
            imageUrl: ['url3'],
            price: 30.0,
            heroImage: require('../assets/images/head-set-1.jpg'),
        },
        {
            id: 4,
            title: 'Product 4',
            slug: 'product-4',
            imageUrl: ['url4'],
            price: 40.0,
            heroImage: require('../assets/images/head-set-1.jpg'),
        },
    ],
  },
  {
    id: '3',
    item: 'Order 3',
    details: 'Details about order 3',
    status: 'Shipped',
    slug: 'order-3',
    date: '2025-07-16',
    items: [
        {
            id: 5,
            title: 'Product 5',
            slug: 'product-5',
            imageUrl: ['url5'],
            price: 50.0,
            heroImage: require('../assets/images/head-set-1.jpg'),
        },
        {
            id: 6,
            title: 'Product 6',
            slug: 'product-6',
            imageUrl: ['url6'],
            price: 60.0,
            heroImage: require('../assets/images/head-set-1.jpg'),
        },
    ],
  }




]