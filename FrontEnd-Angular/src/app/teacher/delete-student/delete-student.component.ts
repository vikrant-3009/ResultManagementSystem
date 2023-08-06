import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StudentDataService } from 'src/app/core/service/student-data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from 'src/app/core/model/student';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  deleteStudentForm: FormGroup = new FormGroup({
    roll_no: new FormControl(''),
    name: new FormControl(''),
    dob: new FormControl(''),
    score: new FormControl('')
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
    this.deleteStudentForm.patchValue({
      roll_no: student.roll_no,
      name: student.name,
      dob: student.dob,
      score: student.score
    });
  }

  onSubmit() {
    const roll_no = this.deleteStudentForm.get('roll_no')?.value;    

    this.studentDataService.deleteStudent(roll_no).subscribe(res => {
      this.location.back();
    });
  }

  onBack() {
    this.location.back();
  }

}
