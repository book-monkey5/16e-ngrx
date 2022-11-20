import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as BookActions from './book.actions';
import { BookStoreService } from '../../shared/book-store.service';
import { selectAllBooks } from './book.selectors';

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadBooks),
      concatLatestFrom(() => this.store.select(selectAllBooks)),
      filter(([action, books]) => !books.length),
      switchMap(() =>
        this.service.getAll().pipe(
          map(data => BookActions.loadBooksSuccess({ data })),
          catchError(error => of(BookActions.loadBooksFailure({ error: error.message })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private service: BookStoreService,
    private store: Store
  ) {}
}
