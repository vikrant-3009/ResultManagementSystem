import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/core/model/student';
import { StudentDataService } from 'src/app/core/service/student-data.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({
      roll_no: new FormControl(''),
      name: new FormControl(''),
      dob: new FormControl(''),
      score: new FormControl('')
  });
  
  constructor(private route: ActivatedRoute, private studentDataService: StudentDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const roll_no = param['roll_no'];

      this.studentDataService.getStudent(roll_no).subscribe(student => {
        this.fillForm(student);
      });
    });
  }

  fillForm(student: Student) {
    this.studentForm = new FormGroup({
      roll_no: new FormControl(student.roll_no),
      name: new FormControl(student.name),
      dob: new FormControl(student.dob),
      score: new FormControl(student.score.toFixed(1))
    });
  }

}
