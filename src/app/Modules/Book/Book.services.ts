import QueryBuilder from '../../Builder/QueryBuilder';
import { IBook } from './Book.interface';
import Book from './Book.model';

const CreateBookInDB = async (payload: IBook) => {
  const result = await Book.create(payload);
  return result;
};
const RetriveAllBookFromDB = async (query: Record<string, unknown>) => {
  const AllBookQuery = new QueryBuilder(Book.find(), query)
    .search(['author', 'category', 'title'])
    .filter()
    .limit();

  const documentCount = await AllBookQuery.countTotal();
  const result = await AllBookQuery.modelQuery;
  return result;
};

const RetriveBookFromDB = async (id: string) => {
  const result = await Book.findById(id);
  return result;
};

const NumberOfCategory = async () => {
  const result = await Book.aggregate([
    { $group: { _id: '$category', count: { $sum: 1 } } },
  ]);
  return result;
};

const DeleteBookFromDB = async (_id: string) => {
  // console.log(_id)
  const result = await Book.findByIdAndDelete(
    _id,
  );
  console.log('book Deleted', result);
  return result;
};
const UpdateBookDataInDB = async (_id: string, payload: Partial<IBook>) => {
  const result = await Book.findByIdAndUpdate(_id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const GetAuthorsFromDB = async () => {
  const result = await Book.aggregate([
    { $group: { _id: '$author', count: { $sum: 1 } } },
  ]);
  return result;
};
export const BookServices = {
  CreateBookInDB,
  RetriveAllBookFromDB,
  RetriveBookFromDB,
  NumberOfCategory,
  DeleteBookFromDB,
  UpdateBookDataInDB,
  GetAuthorsFromDB,
};


