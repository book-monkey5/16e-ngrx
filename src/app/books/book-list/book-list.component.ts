import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadBooks } from '../store/book.actions';
import { selectAllBooks, selectBooksLoading } from '../store/book.selectors';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books$ = this.store.select(selectAllBooks);
  loading$ = this.store.select(selectBooksLoading);

  constructor(private store: Store) {
    this.store.dispatch(loadBooks());
  }
}
