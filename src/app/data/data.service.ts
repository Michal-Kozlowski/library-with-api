import { Injectable } from '@angular/core';

// import { Book } from '../../app/book';
import { Books } from '../../api/books/books';

@Injectable()
export class DataService {
  books = Books;
  users: {name: string, password: string}[] = [
    { name: 'Michał', password: 'password'},
    { name: 'Monika', password: 'password'},
    { name: 'Max', password: 'password'}
  ];
  logged: { name: string, password: string } = { name: 'Michał', password: 'password'};  
  comments: { bookID: number, text: string, author: string }[] = [
    { bookID: 1, text: "This is the first comment" , author: "Michał" },
    { bookID: 1, text: "This is the second comment" , author: "Monika" },
    { bookID: 1, text: "This is the third comment" , author: "Michał" },
    { bookID: 2, text: "This is the fourth comment" , author: "Max" },
    { bookID: 3, text: "This is the fifth comment" , author: "Monika" }
  ];
  
  constructor() { }

}
