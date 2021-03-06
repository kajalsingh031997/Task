import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userData: any = {};
  phoneRegex = "^((\\+91-?)|0)?[0-9]{10}$"; 
  ifscRegex = "^[a-zA-Z0-9]{10}$";
  emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(JSON.stringify(this.userData));
  }

}
