import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { selectAllBooks, selectBooksLoading } from '../store/book.selectors';

import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListComponent ],
      providers: [
        provideMockStore({
          selectors: [
            { selector: selectBooksLoading, value: true },
            { selector: selectAllBooks, value: [] },
          ]
        })
      ]
    })
    .compileComponents();
  });

  it('should show a loading text', () => {
    const fixture = TestBed.createComponent(BookListComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement;
    expect(element.querySelector('.loader').textContent).toBe('Loading ...');
  });
});
