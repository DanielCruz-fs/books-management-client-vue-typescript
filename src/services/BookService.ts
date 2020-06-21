import axios from 'axios';
import { BookModel } from './../models/BookModel';
 

export default class BookService {
  API_URL = process.env.VUE_APP_API_URL;

  public async getAllBooks(): Promise<BookModel[]> {
    let result = await axios.get(`${this.API_URL}/api/books`);
    // console.log(result);
    return result.data;
  }

  public async addNewBook(book: BookModel) {
    let result = await axios.post(`${this.API_URL}/api/books/register`, book);
    // console.log(result);
    return result.data;
  }
  public async deleteBook(id: number) {
    await axios.delete(`${this.API_URL}/api/books/${id}`);
  }
}