import { StatusCodes } from 'http-status-codes';

import { reviewServices } from './review.service';
import catchAsync from '../../Utils/catchAsync';
import sendResponse from '../../Utils/sendResponse';

const createReview = catchAsync(async (req, res) => {
  const result = await reviewServices.createReview(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'review create successfully',
    data: result,
  });
});
const getAllReview = catchAsync(async (req, res) => {
  const result = await reviewServices.getAllReview();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All review get successfully',
    data: result,
  });
});
const getReview = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  console.log('controller ',bookId)
  const result = await reviewServices.getReview(bookId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'get single review successfully',
    data: result,
  });
});


export const reviewControllers = {
  createReview,
  getAllReview,
  getReview,
};