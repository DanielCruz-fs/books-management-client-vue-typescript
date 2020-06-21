import { BookReviewModel } from './BookReviewModel';

export class BookModel {
  id: number;
  title: string;
  author: string;
  bookReviews?: BookReviewModel[];
  createdOn: Date;
  updatedOn: Date;
}