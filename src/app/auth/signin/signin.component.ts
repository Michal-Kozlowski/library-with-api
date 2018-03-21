import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  onSubmit(email, password) {
    this.data.signin(email, password)
      .subscribe(data => {
        this.data.users.forEach((user) => {
          if(user.email === email){
            this.data.logged.name = user.name;
          }
        });
        this.data.logged.email = email;
        this.data.logged.idToken = data.idToken;
        this._router.navigate(['/library']);
      },
      error => {
        this.data.errorMessage = <any>error;
        alert("Wrong credentials, please try again.");
        this.data.logged.name = '';
        this.data.logged.email = '';
        this.data.logged.idToken = '';
      });
  }

  constructor(private _router: Router, private _route: ActivatedRoute, private data:DataService) { }

  ngOnInit() {
    this.data.checkUsers()
      .subscribe(data => {
          for (let key in data) {
          this.data.users.push(data[key]);
        }
      },
      error => this.data.errorMessage = <any>error);
  }

}
