import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../app/book';
import { Books } from '../../api/books/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books = Books;
  book: Book;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.book = Books[id-1];
  }
}
