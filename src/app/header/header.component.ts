import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  onLogout() {
    this.data.logged.name = '';
    this.data.logged.email = '';
    this.data.logged.idToken = '';
  }

  constructor(private data:DataService) { }

  ngOnInit() {
  }

}
