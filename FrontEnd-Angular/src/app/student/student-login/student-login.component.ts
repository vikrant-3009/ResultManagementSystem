import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { RoutePersistenceService } from 'src/app/core/service/route-persistence.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  studentLoginForm: FormGroup = new FormGroup({
    roll_no: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required)
  });

  errorMessage!: string;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private routePersistenceService: RoutePersistenceService) { }

  ngOnInit(): void {
  }

  get roll_no() {
    return this.studentLoginForm.get('roll_no');
  }

  get name() {
    return this.studentLoginForm.get('name');
  }

  onLogin() {
    const roll_no_1 = this.studentLoginForm.get('roll_no')?.value;
    const name_1 = this.studentLoginForm.get('name')?.value;

    const studentObj = {
      roll_no: roll_no_1,
      name: name_1
    };

    this.authService.authenticateStudent(studentObj).subscribe(res => {
      if(res.status === 200) {
        this.routePersistenceService.storeStudentRoute("/student/" + roll_no_1);
        this.router.navigate([roll_no_1], { relativeTo: this.route });
      }
      else {
        this.errorMessage = res.body;
      }
    }, error => {
      this.errorMessage = error.error;
    })
  }

}
