export interface ProductTable {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
}

export const ELEMENT_DATA: ProductTable[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    photo:
      'https://www.egnetas.lt/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-Max-Silver-ismanusis-telefonas.jpg',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    photo:
      'https://www.varle.lt/static/uploads/products/26/app/apple-iphone-13-512gb-rozine.jpg',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'A great phone with one of the best cameras',
    photo:
      'https://www.varle.lt/static/uploads/products/28/app/apple-iphone-13-128gb-blue.jpg',
  },
];
