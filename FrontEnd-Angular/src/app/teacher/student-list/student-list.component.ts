import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  params = { "page": 0, "size": 3 }; // default params attributes for pagination

  previousParent!: Element;

  constructor(private renderer: Renderer2, private studentDataService: StudentDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getStudents(this.params);
  }

  getStudents(params: any) {
    this.studentDataService.getStudents(params).subscribe(data => {
      this.students = data["content"];
      this.totalStudents = data['totalElements'];
    }, error => {
      console.log(error);
    });
  }

  handlePageChange(event: number) {   // here, event is the next page number
    this.params["page"] = event - 1;
    this.page = event;
    this.getStudents(this.params);
  }

  handlePageSizeChange(event: any) {    // here, event is the event object
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

  // this function is for toggling the arrows of the table headers on clicks
  onSort(event: Event) {
    const parent = event.target as Element;
    const arrowUp = parent.children[0];
    const arrowDown = parent.children[1];
    const dataOrder = parent.getAttribute('data-order');

    // Reset the styles of the Previous element, if the new element is clicked
    // Here, element is referred to each table header column
    if(this.previousParent && parent !== this.previousParent) {
      this.renderer.setStyle(this.previousParent.children[0], 'border-bottom-color', '#ccc');
      this.renderer.setStyle(this.previousParent.children[1], 'border-top-color', '#ccc');
    }

    if(dataOrder === 'desc') {
      this.renderer.setStyle(arrowUp, 'border-bottom-color', 'white');
      this.renderer.setStyle(arrowDown, 'border-top-color', 'black');
      parent.setAttribute('data-order', 'asc');
    }
    else {  
      this.renderer.setStyle(arrowUp, 'border-top-color', 'white');
      this.renderer.setStyle(arrowUp, 'border-bottom-color', 'black');
      this.renderer.setStyle(arrowDown, 'border-top-color', 'white');
      this.renderer.setStyle(arrowDown, 'border-bottom-color', 'black');
      parent.setAttribute('data-order', 'desc');
    }

    this.previousParent = parent;
  }

}
