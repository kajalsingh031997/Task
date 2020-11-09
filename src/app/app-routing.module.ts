import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserMainComponent } from './user-main/user-main.component';
import { UserCustomTableComponent } from './user-custom-table/user-custom-table.component';


const routes: Routes = [
  { path: '', component: UserMainComponent },
  { path: 'user-table', component: UserTableComponent },
  { path: 'user-form', component: UserFormComponent },
  { path: 'user-custom-table', component: UserCustomTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


