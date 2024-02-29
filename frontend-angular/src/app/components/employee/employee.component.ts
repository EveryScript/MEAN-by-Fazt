import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { NgForm } from '@angular/forms';
declare var bootbox: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  // Propeties
  public new_employee: Employee = { _id: '', name: '', position: '', office: '', salary: 0, createdAt: '', updatedAt: '' };
  public employees: Employee[] = [];

  constructor(
    public _employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this._employeeService.getEmployees().subscribe(
      response => this.employees = response,
      error => alert("Ha ocurrido un error al obtener a los empleados")
    );
  }

  addEmployee(form: NgForm) {
    if(this.new_employee._id == '') {
      this._employeeService.saveEmployee(form.value).subscribe(
        response => { this.getAllEmployees(); form.reset(); },
        error => console.log(error)
      );
    } else {
      this._employeeService.editEmployee(this.new_employee._id, this.new_employee).subscribe(
        response => { this.getAllEmployees(); form.reset(); },
        error => console.log(error)
      );
    }
  }

  deleteModal(id: string) {
    if (confirm("Are you sure to delete this employee?")) {
      this._employeeService.deleteEmployee(id).subscribe(
        (res: any) => this.getAllEmployees(),
        (err: any) => console.log(err)
      );
    }
  }

  deleteEmployee(employee_id:string) {
    this._employeeService.deleteEmployee(employee_id).subscribe(
      (res: any) => this.getAllEmployees(),
      (err: any) => console.log(err)
    );
  }

  editEmployeeForm(employee: Employee) {
    this.new_employee = employee;
  }
  
  cleanForm(form: NgForm) {
    form.reset();
   this.new_employee = { _id: '', name: '', position: '', office: '', salary: 0, createdAt: '', updatedAt: '' };
  }
}
