import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { BookStoreService } from '../../shared/book-store.service';
import { loadBooks, loadBooksSuccess } from './book.actions';
import { hot, cold } from 'jasmine-marbles';

import { BookEffects } from './book.effects';
import { book } from './test-helper';

describe('BookEffects', () => {
  let actions$: Observable<any>;
  let effects: BookEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookEffects,
        provideMockActions(() => actions$),
        {
          provide: BookStoreService,
          useValue: { getAll: () => of([]) }
        }
      ]
    });

    effects = TestBed.inject(BookEffects);
  });

  it('should fire loadBooksSuccess for loadBooks', () => {
    const books = [book(1), book(2), book(3)];

    // Implementierung von getAll() ersetzen
    const bs = TestBed.inject(BookStoreService);
    spyOn(bs, 'getAll').and.callFake(() => of(books));

    // Action auslösen
    actions$ = hot('--a', { a: loadBooks() });
    const expected = cold('--b', { b: loadBooksSuccess({ data: books }) });

    // Datenströme vergleichen
    expect(effects.loadBooks$).toBeObservable(expected);

    // Serviceaufruf prüfen
    expect(bs.getAll).toHaveBeenCalled();
  });
});
