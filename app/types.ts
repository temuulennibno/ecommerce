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

  meta: {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    barcode: string;
    qrCode: string;
  };

  images: string[];
  thumbnail: string;
};

type Review = {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
};

export type ProductCategory = {
  slug: string;
  name: string;
  url: string;
};

export type User = {
  accessToken: string;
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  username: string;
};

export type MovieSummary = {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type: "movie" | string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string; // ISO date string
  video: boolean;
  vote_average: number;
  vote_count: number;
};
