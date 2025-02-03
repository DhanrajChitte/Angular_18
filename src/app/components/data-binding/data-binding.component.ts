import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone:true,
  imports: [FormsModule  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent 
{
  //Variables create in class not out of the class
  // Basic data types in the TS String,number,boolean,date.
  // Non-primitive Array and Objects

  courseName:string="Angular-18";

  stateName:string="Maharashtra"

  myClassName:string="bg-primary";

  inputType ="radio";

  rollNo:number=123;

  isIndian:boolean=true;

  currentDate:Date = new Date(); 

  firstName=signal("Dhanraj Chitte");

  constructor()
  {
      
  }

  changeCourseName()
  {
    this.courseName="ReactJS";
    this.firstName.set("Dhanraj Sunil Chitte");
  }

  //Declare functions in the TypeScript
  showAlert(message: string)
{

  alert(message);

}
   

}
