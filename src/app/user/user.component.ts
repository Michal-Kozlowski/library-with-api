import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { Book } from '../book';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  books: any;
  
  returnBook(book, event) {    
    book.borrowedBy = '';
    this.books = this.books.filter(b => b !== book);
    let url = 'http://localhost:3000/Books/' + book.id
    this.data.updateBook(url, book)
      .subscribe(book => {
        book = book;
      },
      error => this.data.errorMessage = <any>error);   
  }

  constructor(private data:DataService) { }

  userUrl: string = 'http://localhost:3000/Books?borrowedBy=' + this.data.logged.name;

  ngOnInit() {
    this.data.getBook(this.userUrl)
      .subscribe(books => {
        this.books = books;
      },
      error => this.data.errorMessage = <any>error);  
  }
}
