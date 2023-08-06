import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { TeacherRoutingModule } from './teacher-routing.module';
import { SharedModule } from '../shared/shared.module';

import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';


@NgModule({
  declarations: [
    TeacherLoginComponent,
    TeacherDashboardComponent,
    AddStudentComponent,
    StudentListComponent,
    EditStudentComponent,
    DeleteStudentComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    TeacherRoutingModule,
    SharedModule
  ]
})
export class TeacherModule { }
