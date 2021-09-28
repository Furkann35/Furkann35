import { ProductModel } from './products.model';

export const productList: ProductModel[] = [
    {
        id: 1,
        category: 'Blue color, T-shirt',
        name: 'Full sleeve T-shirt',
        ratings: 0,
        reviewCount: 0,
        discount: 10,
        oriRate: 450,
        disRate: 405,
        // tslint:disable-next-line: max-line-length
        feature: ['Full Sleeve', 'highest quality fabric', 'Cotton', 'All Sizes available', '4 Different Color'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'red'
        }],
        images: ['assets/images/product/img-1.png', 'assets/images/product/img-1.png', 'assets/images/product/img-1.png'],
        colorVariant: [{
            key: 'red',
            value: 'assets/images/product/img-1.png'
        },
        {
            key: 'black',
            value: 'assets/images/product/img-1.png'
        }]
    },
    {
        id: 2,
        category: 'Half sleeve, T-shirt',
        name: 'Half sleeve T-shirt',
        ratings: 0,
        reviewCount: 0,
        discount: 20,
        oriRate: 225,
        disRate: 175,
        // tslint:disable-next-line: max-line-length
        feature: ['Full Sleeve', 'highest quality fabric', 'Cotton', 'All Sizes available', '4 Different Color'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Light Blue'
        }],
        images: ['assets/images/product/img-2.png', 'assets/images/product/img-2.png', 'assets/images/product/img-2.png'],
        colorVariant: [{
            key: 'red',
            value: 'assets/images/product/img-2.png'
        },
        {
            key: 'yellow',
            value: 'assets/images/product/img-2.png'
        },
        {
            key: 'green',
            value: 'assets/images/product/img-2.png'
        }
        ]
    },
    {
        id: 3,
        category: 'Green color, Hoodie',
        name: 'Hoodie (Green)',
        ratings: 0,
        reviewCount: 0,
        discount: 14,
        oriRate: 177,
        disRate: 152,
        // tslint:disable-next-line: max-line-length
        feature: ['Full Sleeve', 'highest quality fabric', 'Cotton', 'All Sizes available', '4 Different Color'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Green'
        }],
        images: ['assets/images/product/img-3.png', 'assets/images/product/img-3.png', 'assets/images/product/img-3.png'],
        colorVariant: [{
            key: 'Green',
            value: 'assets/images/product/img-3.png'
        },
        {
            key: 'Green',
            value: 'assets/images/product/img-3.png'
        }]
    },
    {
        id: 4,
        category: 'Gray color, Hoodie',
        name: 'Hoodie (Gray)',
        ratings: 4,
        reviewCount: 152,
        discount: 5,
        oriRate: 150,
        disRate: 145,
        // tslint:disable-next-line: max-line-length
        feature: ['Full Sleeve', 'highest quality fabric', 'Cotton', 'All Sizes available', '4 Different Color'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Gray'
        }],
        images: ['assets/images/product/img-4.png', 'assets/images/product/img-4.png', 'assets/images/product/img-4.png'],
        colorVariant: [{
            key: 'Gray',
            value: 'assets/images/product/img-4.png'
        },
        {
            key: 'Gray',
            value: 'assets/images/product/img-4.png'
        }]
    },
    {
        id: 5,
        category: 'Blue color, T-shirt',
        name: 'Full sleeve T-shirt',
        ratings: 0,
        reviewCount: 0,
        discount: 14,
        oriRate: 177,
        disRate: 152,
        // tslint:disable-next-line: max-line-length
        feature: ['Full Sleeve', 'highest quality fabric', 'Cotton', 'All Sizes available', '4 Different Color'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'Blue'
        }],
        images: ['assets/images/product/img-5.png', 'assets/images/product/img-5.png', 'assets/images/product/img-5.png'],
        colorVariant: [{
            key: 'pink',
            value: 'assets/images/product/img-5.png'
        },
        {
            key: 'yellow',
            value: 'assets/images/product/img-5.png'
        }]
    },
    {
        id: 6,
        category: 'Black color, T-shirt',
        name: 'Half sleeve T-shirt',
        ratings: 0,
        reviewCount: 0,
        discount: 22,
        oriRate: 240,
        disRate: 225,
        // tslint:disable-next-line: max-line-length
        feature: ['Full Sleeve', 'highest quality fabric', 'Cotton', 'All Sizes available', '4 Different Color'],
        specification: [{
            key: 'size',
            value: 'M'
        },
        {
            key: 'color',
            value: 'black'
        }],
        images: ['assets/images/product/img-6.png', 'assets/images/product/img-6.png', 'assets/images/product/img-6.png'],
        colorVariant: [{
            key: 'black',
            value: 'assets/images/product/img-6.png'
        },
        {
            key: 'yellow',
            value: 'assets/images/product/img-6.png'
        }]
    }
];
