import { Types } from 'mongoose';

export interface IUser {
  id?: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  passwordChangeAt?: Date;
  phone?: string;
  address?: string;
  city?: string;
  createdAt?: Date;
  updatedAt?: Date;
  activity: 'activated' | 'deactivated';
  favoriteBooks?: Types.ObjectId[]; // Array of ObjectId references to Book documents
  cart?: Types.ObjectId[]; // Array of ObjectId references to Book documents
  orders : Types.ObjectId[]; // Array of ObjectId references to Order documents
}
