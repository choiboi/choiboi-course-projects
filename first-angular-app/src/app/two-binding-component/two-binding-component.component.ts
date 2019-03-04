import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-binding-component',
  templateUrl: './two-binding-component.component.html',
  styleUrls: ['./two-binding-component.component.css']
})
export class TwoBindingComponentComponent implements OnInit {
  username: string = "";
  isUsernameValid:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  verifyUsername() {
    this.isUsernameValid = !!this.username;
  }

  submitUsername() {
    if (this.isUsernameValid) {
      this.isUsernameValid = false;
      this.username = "";
    }
  }
}
