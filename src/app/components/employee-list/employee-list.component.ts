import { Component } from '@angular/core';
@Component({
  selector: 'app-employee-list',
  standalone: true,
  template: '<h1 class="text-primary"> Hello From Admin </h1>',
  styles: ['.primary{color:red;}']  //Inline CSS
})
export class EmployeeListComponent {}
