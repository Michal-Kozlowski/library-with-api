import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  returnBook( book) {    
    book.borrowedBy = '';
    this.data.saveData();
    return false;
  }

  constructor(private data:DataService) { }

  ngOnInit() {
  }

}
