import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '../../shared/book';
import { loadBooks } from '../store/book.actions';
import { selectAllBooks, selectBooksLoading } from '../store/book.selectors';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  standalone: false,
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.books$ = this.store.select(selectAllBooks);
    this.loading$ = this.store.select(selectBooksLoading);

    this.store.dispatch(loadBooks());
  }
}
