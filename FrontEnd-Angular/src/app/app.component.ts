import { Component, OnInit } from '@angular/core';
import { faCoffee, faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontEnd-Angular';
  faCoffee = faCoffee;
  faSort = faSort;

  constructor() { }

  ngOnInit(): void { }

}
