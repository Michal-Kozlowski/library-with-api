import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';

import { Book } from '../book';
import { Comment } from '../comment';

@Injectable()
export class DataService {
  books: Book[];
  comments: Comment[];
  logged: { name: string, email: string, idToken: string } = { name: '', email: '', idToken: ''};
  users: { email: string, name: string }[] = [];

  errorMessage: string;

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
    if(this.logged.name) {
      if(!book.rate.voters.includes(this.logged.name)) {
        let url = 'https://library-json-server-api.herokuapp.com/Books/' + book.id;
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
    let url = 'https://library-json-server-api.herokuapp.com/Books/' + book.id;
    book.borrowedBy = this.logged.name;
    this.updateBook(url, book)
      .subscribe(book => {
        book = book;
      },
      error => this.errorMessage = <any>error);
  }

  // returns books with M in it
  // https://library-json-server-api.herokuapp.com/Books?name_like=M

  constructor(private _http: HttpClient) { }

  //----api setup--------------------------------------------------
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

  //----firebase setup---------------------------------------------
  checkUsers(): Observable<any> {
    return this._http.get<any>("https://library-log.firebaseio.com/users.json")
      ._catch(this.handleError);
  }

  createUserName(name, email, idToken): Observable<any> {
    let url:string = "https://library-log.firebaseio.com/users.json?auth=" + idToken;
    return this._http.post<any>(url, {name, email})
      ._catch(this.handleError);
  }

  signup(email, password): Observable<any> {
    return this._http.post<any>("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAW898T5zbIY7YL7LFCiHH5geH4iqWVcTo", {"email":email, "password":password, "returnSecureToken":true})
      // .do(data => console.log(data))
      ._catch(this.handleError);
  }

  signin(email, password): Observable<any> {
    return this._http.post<any>("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAW898T5zbIY7YL7LFCiHH5geH4iqWVcTo", {"email":email, "password":password, "returnSecureToken":true})
      // .do(data => console.log(data))
      ._catch(this.handleError);
  }

  //-----------------------------------------------------------
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
