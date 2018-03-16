import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { Book } from '../book';
import { Comment } from '../comment';

@Injectable()
export class DataService {
  books: Book[];
  comments: Comment[];
  users: {name: string, password: string}[] = [
    { name: 'Michał', password: 'password'},
    { name: 'Monika', password: 'password'},
    { name: 'Max', password: 'password'}
  ];
  logged: { name: string, password: string } = { name: 'Michał', password: 'password'};

  errorMessage: string;
  
  saveData() {
    let local = {users: this.users, logged: this.logged};
    localStorage.setItem('libraryState', JSON.stringify(local));
  }

  loadData() {
    let local = localStorage.getItem('libraryState');
    if(local) {   
      this.users = JSON.parse(local).users;
      this.logged = JSON.parse(local).logged;
    }
  }

  rating(book) {
    return Math.round(book.rate.sum/book.rate.voters.length);
  }

  numberOfStars(stars: number) {
    return Array.from(Array(stars), (_,x) => x);
  }

  starsHover(index, id) {
    for(let i:number = 0; i<=index; i++) {
      for(let j:number = 0; j<5; j++) {document.querySelectorAll("i")[(5*(id-1))+j].classList.add('noRate');} 
      document.querySelectorAll("i")[(5*(id-1))+index-i].classList.add('starHover');
    }
  }

  starsLeave(index, id) {
    for(let i:number = 0; i<=index; i++) {
      for(let j:number = 0; j<5; j++) {document.querySelectorAll("i")[(5*(id-1))+j].classList.remove('noRate');}   
      document.querySelectorAll("i")[(5*(id-1))+index-i].classList.remove('starHover');
    }
  }

  starRate(index, book) {        
    if(this.logged.name){
      if(!book.rate.voters.includes(this.logged.name)) {
        let url = 'http://localhost:3000/Books/' + book.id;
        book.rate.sum += index + 1;
        book.rate.voters.push(this.logged.name);
        this.updateBook(url, book)
          .subscribe(book => {
            book = book;
          },
          error => this.errorMessage = <any>error);  
      } else {
        alert("You have already rated this book!");
      }          
    } else {
      alert("You have to log in to do that!"); 
    }
  }

  borrow(book, name) {
    let url = 'http://localhost:3000/Books/' + book.id;
    book.borrowedBy = this.logged.name;
    this.updateBook(url, book)
      .subscribe(book => {
        book = book;
      },
      error => this.errorMessage = <any>error);
  }

  // returns books with M in it
  // http://localhost:3000/Books?name_like=M

  constructor(private _http: HttpClient) { }

  getBooks(url): Observable<Book[]> {
    return this._http.get<Book[]>(url)
      .catch(this.handleError);
  }

  getBook(url): Observable<Book> {
    return this._http.get<Book>(url)
      .catch(this.handleError);
  }

  getComments(url): Observable<Comment> {
    return this._http.get<Comment>(url)
      .catch(this.handleError);
  }

  deleteComment(url): Observable<Comment> {
    return this._http.delete<Comment>(url)
      .catch(this.handleError);
  }

  addComment(url, body): Observable<Comment> {
    return this._http.post<Comment>(url, body)
      .catch(this.handleError);
  }

  updateBook(url, body): Observable<Book> {
    return this._http.put<Book>(url, body)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}