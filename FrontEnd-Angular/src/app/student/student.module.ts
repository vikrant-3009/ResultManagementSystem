import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentResultComponent } from './student-result/student-result.component';


@NgModule({
  declarations: [
    StudentLoginComponent,
    StudentResultComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
