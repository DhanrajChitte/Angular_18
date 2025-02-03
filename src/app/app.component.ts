import { Component } from '@angular/core';
//import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
//import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-18';
}
