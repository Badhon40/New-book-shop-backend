import { IReview } from './review.interface';
import Review from './review.model';

const createReview = async (payload: IReview) => {
  const result = await Review.create({ ...payload, likeCount: 0 });
  return result;
};
const getAllReview = async () => {
  const requests = await Review.find().populate('bookId').exec();
  return requests;
};
const getReview = async (bookId: string) => {
  const requests = await Review.find( {bookId}).exec();
  return requests;
};

export const reviewServices = {
  createReview,
  getAllReview,
  getReview
};