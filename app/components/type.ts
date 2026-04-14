export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
};

export type Review = {
  rating: number;
  comment: string;
  date: string; // or Date if you parse it
  reviewerName: string;
  reviewerEmail: string;
};

type Meta = {
  createdAt: string; // or Date
  updatedAt: string; // or Date
  barcode: string;
  qrCode: string;
};
// TODO 3: API хариуны төрөл зарлах
export type ProductApiResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
