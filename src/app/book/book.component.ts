import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../app/book';
import { Comment } from '../../app/comment';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  id = +this._route.snapshot.paramMap.get('id');
  book: Book;
  comments: any;

  comment: string = '';

  borrow() {
    if(this.data.logged.name === '') {
      alert("You need to log in to borrow books!");
    } else {
      this.book.borrowedBy = this.data.logged.name;
      this.data.borrow(this.book, this.data.logged.name);
    }
  }
  
  match_id(comment) {
    return comment.bookID == this.id;
  }

  bookUrl: string = 'http://library-json-server-api.herokuapp.com/Books/' + this.id;
  commentsUrl: string = 'http://library-json-server-api.herokuapp.com/Comments';
  commentUrl: string = this.commentsUrl + '?bookID=' + this.id;

  addComment() {  
    this.data.addComment(this.commentsUrl, { "bookID": this.id, "text": this.comment , "author": this.data.logged.name })
      .subscribe(comment => {
        this.comments.push(comment);
        },
        error => this.data.errorMessage = <any>error);  
    this.comment = "";
  }

  deleteComment(comment: Comment) {
    this.comments = this.comments.filter(c => c !== comment);
    
    let urlToDelete: string = this.commentsUrl + "/" + comment.id;    
    this.data.deleteComment(urlToDelete)
      .subscribe(error => this.data.errorMessage = <any>error);
  }

  constructor(private _route: ActivatedRoute, private data:DataService) { }
  
  ngOnInit() {
    this.data.getBook(this.bookUrl)
      .subscribe(book => {
        this.book = book;
      },
      error => this.data.errorMessage = <any>error);

    this.data.getComments(this.commentUrl)
      .subscribe(comments => {
        this.comments = comments;
      },
      error => this.data.errorMessage = <any>error);  
  }
}
