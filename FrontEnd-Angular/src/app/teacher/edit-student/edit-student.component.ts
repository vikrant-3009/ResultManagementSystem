import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Student } from 'src/app/core/model/student';
import { StudentDataService } from 'src/app/core/service/student-data.service';
import { dobValidator } from 'src/app/shared/directives/dob.validator';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editStudentForm: FormGroup = new FormGroup({
    roll_no: new FormControl(''),
    name: new FormControl('', Validators.required),
    dob: new FormControl('', [Validators.required, dobValidator()]),
    score: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)])
  });

  constructor(private route: ActivatedRoute, private location: Location, private studentDataService: StudentDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const roll_no = param['roll_no'];

      this.studentDataService.getStudent(roll_no).subscribe(student => {
        this.fillForm(student);
      });
    });
  }

  fillForm(student: Student) {
    this.editStudentForm.patchValue({
      roll_no: student.roll_no,
      name: student.name,
      dob: student.dob,
      score: student.score
    });
  }

  get name() {
    return this.editStudentForm.get('name');
  }

  get dob() {
    return this.editStudentForm.get('dob');
  }

  get score() {
    return this.editStudentForm.get('score');
  }

  onSubmit() {
    const roll_no = this.editStudentForm.get('roll_no')?.value;
    const name = this.editStudentForm.get('name')?.value;
    const dob = this.editStudentForm.get('dob')?.value;
    const score = this.editStudentForm.get('score')?.value;

    const student = new Student(roll_no, name, dob, score);
    this.studentDataService.editStudent(student).subscribe(res => {
      this.location.back();
    });
  }

}
