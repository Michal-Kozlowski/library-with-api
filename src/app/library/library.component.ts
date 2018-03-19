import { Component, OnInit } from '@angular/core';
import { Book } from '../../app/book';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books: Book[];

  search: string = '';

  matchName(book: Book) {
    return book.name.toLowerCase().includes(this.search.toLowerCase());
  }

  matchAuthor(book: Book) {
    return book.author.toLowerCase().includes(this.search.toLowerCase());
  }

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getBooks('http://library-json-server-api.herokuapp.com/Books')
      .subscribe(books => {
        this.books = books;
      },
      error => this.data.errorMessage = <any>error);    
  }
}
