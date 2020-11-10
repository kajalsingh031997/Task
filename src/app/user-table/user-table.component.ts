import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  public userList: any;
  public cityFilter: string;
  public currentPage:number;
  constructor(private userApi : UserApiService, private route : Router, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.cityFilter = this.activateRoute.snapshot.queryParams['filter'] ? this.activateRoute.snapshot.queryParams['filter'] : 'DELHI';
    this.getUserDataList();
  }

  getUserDataList(){
    this.userApi.getUserData(this.cityFilter).subscribe((data : any)=>{
      this.userList = data;
    })
  }

  onFilterChange(event){
    this.cityFilter = event.target.value;
    this.route.navigate(['/user-table'], { queryParams: { filter: this.cityFilter } });
    this.getUserDataList();
  }

}
