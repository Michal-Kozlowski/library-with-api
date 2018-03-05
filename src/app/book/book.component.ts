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
  id = +this._route.snapshot.paramMap.get('id');
  book: Book = this.data.books[this.id-1];

  comment: string = '';

  borrow() {
    this.book.borrowedBy = this.data.logged.name;
  }
  
  match_id(comment) {
    return comment.bookID == this.id;
  }

  addComment() {
    this.data.comments.push({bookID: this.id, text: this.comment , author: this.data.logged.name});
    this.comment = '';
  }

  deleteComment(index) {
    this.data.comments.splice(index, 1);
  }

  constructor(private _route: ActivatedRoute, private data:DataService) { }

  ngOnInit() {

  }  
}
