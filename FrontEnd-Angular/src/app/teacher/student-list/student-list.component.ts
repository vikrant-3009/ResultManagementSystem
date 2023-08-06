import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { Student } from 'src/app/core/model/student';
import { StudentDataService } from 'src/app/core/service/student-data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  
  page: number = 1;
  pageSize: number = 3;
  pageSizes: number[] = [3, 6, 9, 15, 30, 60, 90]
  totalStudents: number = 0;
  students: Student[] = [];
  params = { "page": 0, "size": 3 };

  isClicked: boolean = false;
  faSort = faSort;
  faSortUp = faSortUp;
  faSortDown = faSortDown;

  constructor(private studentDataService: StudentDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getStudents(this.params);
  }

  getStudents(params: any) {
    this.studentDataService.getStudents(params).subscribe(data => {
      // console.log("Data: ", data);
      this.students = data["content"];
      this.totalStudents = data['totalElements'];
    }, error => {
      console.log(error);
    });
  }

  handlePageChange(event: number) {
    // console.log(event);
    this.params["page"] = event - 1;
    this.page = event;
    this.getStudents(this.params);
  }

  handlePageSizeChange(event: any) {
    // console.log(event);
    this.params["size"] = event.target.value;
    this.pageSize = event.target.value;
    this.getStudents(this.params);
  }

  edit(roll_no: string) {
    this.router.navigate(['edit', roll_no], { relativeTo: this.route });
  }

  delete(roll_no: string) {
    this.router.navigate(['delete', roll_no], { relativeTo: this.route });
  }

  onSort() {
    this.isClicked = !this.isClicked;
  }

}
