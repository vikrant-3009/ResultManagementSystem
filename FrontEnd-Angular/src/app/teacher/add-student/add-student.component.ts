import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Student } from 'src/app/core/model/student';
import { StudentDataService } from 'src/app/core/service/student-data.service';
import { dobValidator } from 'src/app/shared/directives/dob.validator';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addStudentForm: FormGroup = new FormGroup({
    roll_no: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    dob: new FormControl('', [Validators.required, dobValidator()]),
    score: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)])
  });
  errorMessage!: string;

  constructor(private studentDataService: StudentDataService, private location: Location) { }

  ngOnInit(): void {
  }

  get roll_no() {
    return this.addStudentForm.get('roll_no');
  }

  get name() {
    return this.addStudentForm.get('name');
  }

  get dob() {
    return this.addStudentForm.get('dob');
  }

  get score() {
    return this.addStudentForm.get('score');
  }

  onSubmit() {
    const roll_no = this.addStudentForm.get('roll_no')?.value;
    const name = this.addStudentForm.get('name')?.value;
    const dob = this.addStudentForm.get('dob')?.value;
    const score = this.addStudentForm.get('score')?.value;

    const student = new Student(roll_no, name, dob, score);

    this.studentDataService.addNewStudent(student).subscribe(res => {
      if(res.status === 201) {
        this.location.back();
      }
    }, error => {
      this.errorMessage = error.error;
    });
  }

}
