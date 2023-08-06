import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "teacher",
    loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)
  },
  {
    path: "student",
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  }, 
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
