import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherGuard } from '../core/guard/teacher.guard';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherLoginComponent,
    canActivateChild: [TeacherGuard],
    
    children: [
      {
        path: ':teacherId',
        component: TeacherDashboardComponent,

        children: [
          {
            path: 'add',
            component: AddStudentComponent
          },
          {
            path: 'edit/:roll_no',
            component: EditStudentComponent
          },
          {
            path: 'delete/:roll_no',
            component: DeleteStudentComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
