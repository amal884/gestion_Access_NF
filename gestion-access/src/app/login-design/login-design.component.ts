import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-design',
  templateUrl: './login-design.component.html',
  styleUrls: ['./login-design.component.css']
})
export class LoginDesignComponent implements OnInit {
  invalidLogin: any;
  ErrorMessage: any;
  insertForm: any;
  Username: any;
  Password: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
