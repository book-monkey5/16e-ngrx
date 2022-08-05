import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { of } from 'rxjs';
import { BookStoreService } from '../../shared/book-store.service';

import { loadBooks, loadBooksSuccess } from './book.actions';
import { BookEffects } from './book.effects.alternative';
import { initialState } from './book.reducer';
import { book } from './test-helper';

describe('BookEffects', () => {
  let actions$: Actions;
  let effects: BookEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: { book: initialState }
        }),
        {
          provide: BookStoreService,
          useValue: {
            getAll: () => of([])
          }
        }
      ]
    });

    effects = TestBed.inject(BookEffects);
  });

  it('should fire loadBooksSuccess for loadBooks if store is empty', () => {

    actions$ = hot('--a', { a: loadBooks() });
    const expected = cold('--b', { b: loadBooksSuccess({ data: [] }) });

    expect(effects.loadBooks$).toBeObservable(expected);
  });

  it('should do nothing if store is already filled', () => {

    const store = TestBed.inject(MockStore);
    store.setState({
      book: {
        books: [book(1)],
        loading: false
      }
    });

    actions$ =        hot('--a', { a: loadBooks() });
    const expected = cold('---');

    expect(effects.loadBooks$).toBeObservable(expected);
  });
});
