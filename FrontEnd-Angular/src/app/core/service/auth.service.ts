import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:8083";
  private teacherApiUrl = this.baseUrl + "/api/teachers";
  private studentApiUrl = this.baseUrl + "/api/students";

  constructor(private http: HttpClient) { }

  authenticateTeacher(teacherCredentials: object): Observable<any> {
    return this.http.post(this.teacherApiUrl + "/authenticate",
      teacherCredentials,
      {
        responseType: 'text',
        observe: 'response'
      }
    );
  }

  authenticateStudent(studentCredentials: object): Observable<any> {
    return this.http.post(this.studentApiUrl + "/authenticate", 
      studentCredentials,
      {
        responseType: 'text',
        observe: 'response'
      }
    );
  }

}
