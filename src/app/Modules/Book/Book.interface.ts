enum Category {
  Fiction,
  Science,
  SelfDevelopment,
  Poetry,
  Religious,
}

export interface IBook {
  image : string;
  title: string;
  author: string;
  category: keyof typeof Category;
  description: string;
  quantity: number;
  rating: number;
  offers: number;
  publisher: string;
  publicationDate: Date;
  price: number;
  inStock: boolean;
  isDeleted: boolean;
}

