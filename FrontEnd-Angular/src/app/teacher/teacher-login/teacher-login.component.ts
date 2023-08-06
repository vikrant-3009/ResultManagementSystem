import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Teacher } from 'src/app/core/model/teacher';
import { AuthService } from 'src/app/core/service/auth.service';
import { RoutePersistenceService } from 'src/app/core/service/route-persistence.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {
  teacherForm: FormGroup = new FormGroup({
    teacherId: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  errorMessage!: String;

  constructor(private authService: AuthService, private routePersistenceService: RoutePersistenceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  get teacherId() {
    return this.teacherForm.get('teacherId');
  }

  get password() {
    return this.teacherForm.get('password');
  }

  onSubmit() {
    const teacherId = this.teacherForm.get('teacherId')?.value;
    const password = this.teacherForm.get('password')?.value;
    const teacherObj = new Teacher(teacherId, password);

    this.authService.authenticateTeacher(teacherObj).subscribe(res => {
      // console.log('Res: ', res);
      if(res.status === 200) {
        this.routePersistenceService.storeTeacherRoute("/teacher/" + teacherId);
        this.router.navigate([teacherId], { relativeTo: this.route });
      }
      else {
        this.errorMessage = res.body;
      }
    }, error => {
      // console.log('Error: ', error);
      this.errorMessage = error.error;
    });
  }

}