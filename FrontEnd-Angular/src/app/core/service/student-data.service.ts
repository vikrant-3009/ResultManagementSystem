import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  private baseUrl = "http://localhost:8083";
  private studentApiUrl = this.baseUrl + "/api/students";

  constructor(private http: HttpClient) { }

  getStudents(params: any): Observable<any> {
    return this.http.get(this.studentApiUrl, { params });
  }

  addNewStudent(student: Student): Observable<any> {
    return this.http.post(this.studentApiUrl, 
      student,
      {
        responseType: 'text',
        observe: 'response'
      }
    );
  }

  getStudent(roll_no: string): Observable<any> {
    return this.http.get(this.studentApiUrl + "/" + roll_no);
  }

  editStudent(student: Student): Observable<any> {
    return this.http.put(this.studentApiUrl + "/edit/" + student.roll_no, 
      student,
      {
        responseType: 'text',
        observe: 'response'
      }
    );
  }

  deleteStudent(roll_no: String): Observable<any> {
    return this.http.delete(this.studentApiUrl + "/delete/" + roll_no,
      {
        responseType: 'text',
        observe: 'response'
      }
    );
  }

}
