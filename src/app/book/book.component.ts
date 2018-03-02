import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../app/book';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book;

  numberOfStars(stars: number) {
    return Array.from(Array(stars), (_,x) => x);
  }

  rating(book) {
    return Math.round(book.rate.sum/book.rate.voters.length);
  }

  constructor(private _route: ActivatedRoute, private data:DataService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.book = this.data.books[id-1];
  }
}
