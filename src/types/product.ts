export enum CategoryName {
  phone = 'phones',
  tablet = 'tablets',
  accessory = 'accessories',
}

export type Product = {
  age: number,
  category: CategoryName,
  // type: CategoryName,
  id: string,
  image: string
  name: string
  snippet: string,
  price: number,
  fullPrice: number,
  discount: number,
  screen: string,
  capacity: string,
  ram: string,
  color: string,
  year: number,
};

export type Category = {
  id: number;
  title: string;
  img: string;
  category: CategoryName;
};
