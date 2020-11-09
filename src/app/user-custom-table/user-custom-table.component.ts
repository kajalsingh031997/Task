import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-custom-table',
  templateUrl: './user-custom-table.component.html',
  styleUrls: ['./user-custom-table.component.css']
})
export class UserCustomTableComponent implements OnInit {

  public customArray: Array<any> = [
    { "id": 1, "firstName": "firstName 1", "lastName": "lastname 1", "gender": "Male", "phoneNo": "3434334343", "email": "email1@gmail", "accountNo": "1423232324", "ifsc": "icici" },
    { "id": 2, "firstName": "firstName 2", "lastName": "lastname 2", "gender": "Female", "phoneNo": "356546", "email": "email2@gmail", "accountNo": "142212134", "ifsc": "hdfc" },
    { "id": 3, "firstName": "firstName 3", "lastName": "lastname 3", "gender": "Others", "phoneNo": "121234", "email": "email3@gmail", "accountNo": "142667634", "ifsc": "yes" },
    { "id": 4, "firstName": "firstName 4", "lastName": "lastname 4", "gender": "Female", "phoneNo": "868785", "email": "email4@gmail", "accountNo": "1427878734", "ifsc": "kotak" },
    { "id": 5, "firstName": "firstName 5", "lastName": "lastname 5", "gender": "Male", "phoneNo": "14343434", "email": "email5@gmail", "accountNo": "142898934", "ifsc": "icici" },
    { "id": 6, "firstName": "firstName 6", "lastName": "lastname 6", "gender": "Male", "phoneNo": "143476767", "email": "email6@gmail", "accountNo": "142454534", "ifsc": "hdfc" },
    { "id": 7, "firstName": "firstName 7", "lastName": "lastname 7", "gender": "Others", "phoneNo": "14348989", "email": "email7@gmail", "accountNo": "1476767234", "ifsc": "icici" },
    { "id": 8, "firstName": "firstName 8", "lastName": "lastname 8", "gender": "Male", "phoneNo": "14342323", "email": "email8@gmail", "accountNo": "142387874", "ifsc": "icici" },
    { "id": 9, "firstName": "firstName 9", "lastName": "lastname 9", "gender": "Female", "phoneNo": "1434989", "email": "email9@gmail", "accountNo": "1426767634", "ifsc": "hdfc" },
    { "id": 10, "firstName": "firstName 10", "lastName": "lastname 10", "gender": "Male", "phoneNo": "143443434", "email": "email10@gmail", "accountNo": "142332324", "ifsc": "icici" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
