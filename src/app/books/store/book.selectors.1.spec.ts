import { selectAllBooks } from './book.selectors';
import { book } from './test-helper';

describe('Book Selectors', () => {
  it('should select all books', () => {
    const books = [book(1), book(2), book(3)];
    const bookState = { books, loading: false };

    const result = selectAllBooks.projector(bookState);
    expect(result).toEqual(books);
  });
});
