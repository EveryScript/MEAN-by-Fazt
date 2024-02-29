// --- SERVICE CREATED BY NG ---
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // Propeties
  URL_API = 'http://localhost:4000/api/employees';

  constructor(
    private _http: HttpClient
  ) { }

  // Method get employees
  getEmployees() {
    return this._http.get <Employee[]> (this.URL_API); // Define type response data <Employee[]>
  }

  // Method save employee
  saveEmployee(employee:Employee) {
    return this._http.post <Employee> (this.URL_API, employee)
  }
  
  // Method delete employee
  deleteEmployee(id:string) {
    return this._http.delete(`${this.URL_API}/${id}`); // Interpolation!
  }

  // Method efit employee
  editEmployee(id:string, employee:Employee) {
    return this._http.put(`${this.URL_API}/${id}`, employee);
  }
}
