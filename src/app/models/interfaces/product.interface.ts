export interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductDataRating
}

export interface ProductDataRating {
  rate: number;
  count: number;
}