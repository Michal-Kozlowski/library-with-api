import { Component, OnInit } from '@angular/core';
import { Book } from '../../app/book';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books = this.data.books;

  numberOfStars(stars: number) {
    return Array.from(Array(stars), (_,x) => x);
  }

  search: string = '';

  matchName(book: Book) {
    return book.name.toLowerCase().includes(this.search.toLowerCase());
  }

  matchAuthor(book: Book) {
    return book.author.toLowerCase().includes(this.search.toLowerCase());
  }

  starsHover(index, id) {
    for(let i:number = 0; i<=index; i++) {
      document.querySelectorAll("i")[(5*(id-1))+index-i].classList.add('starHover');
    }
  }

  starsLeave(index, id) {
    for(let i:number = 0; i<=index; i++) {
      document.querySelectorAll("i")[(5*(id-1))+index-i].classList.remove('starHover');
    }
  }

  rating(book) {
    return Math.round(book.rate.sum/book.rate.voters.length);
  }

  rate(index, book) {
    if(this.data.logged.name){
      if(!this.books[book.id-1].rate.voters.includes(this.data.logged.name)) { 
        const vote = {
          value: index,
          id: book.id-1
        }  
        this.data.rate(vote);
      } else {
        alert("You have already rated this book!");
      }          
    } else {
      alert("You have to log in to do that!"); 
    }
  }

  constructor(private data:DataService) { }

  ngOnInit() {
  }
}
