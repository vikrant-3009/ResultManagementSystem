import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentGuard } from '../core/guard/student.guard';
import { StudentResultComponent } from './student-result/student-result.component';

const routes: Routes = [
  {
    path: "",
    component: StudentLoginComponent,
    canActivateChild: [StudentGuard],

    children: [
      {
        path: ':roll_no',
        component: StudentResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
