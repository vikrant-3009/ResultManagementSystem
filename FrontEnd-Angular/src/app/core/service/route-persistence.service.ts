import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutePersistenceService {
  private TEACHER_ROUTE_KEY = "teacherRoute";
  private teacherLoggedIn = "teacherLoggedIn"

  private STUDENT_ROUTE_KEY = "studentRoute";
  private stduentLoggedIn = "studentLoggedIn";

  constructor() { }

  storeTeacherRoute(route: string): void {
    localStorage.setItem(this.teacherLoggedIn, "true");
    localStorage.setItem(this.TEACHER_ROUTE_KEY, route);
  }

  getTeacherLoggedIn(): string {
    return localStorage.getItem(this.teacherLoggedIn) || "false";
  }

  storeStudentRoute(route: string): void {
    localStorage.setItem(this.stduentLoggedIn, "true");
    localStorage.setItem(this.STUDENT_ROUTE_KEY, route);
  }

  getStudentLoggedIn(): string {
    return localStorage.getItem(this.stduentLoggedIn) || "false";
  }

  clearRoutes(): void {
    localStorage.clear();
  }

}