import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  onSubmit(name, email, password) {
    let check = false;
    this.data.users.forEach((user) => {
      if(user.name === name){
        check = true;
        alert("Name already in use");
      }
    });
    if(!check) {
      this.data.logged.name = name;

      this.data.signup(email, password)
        .subscribe(data => {
          this.data.logged.email = data.email;
          this.data.logged.idToken = data.idToken;
          this.data.createUserName(name, email, data.idToken)
            .subscribe(error => this.data.errorMessage = <any>error);
          this._router.navigate(['/library']);
        },
        error => {
          this.data.errorMessage = <any>error;
          alert("Email already in use.");
          this.data.logged.name = '';
          this.data.logged.email = '';
          this.data.logged.idToken = '';
        });
    }
    return false;
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
