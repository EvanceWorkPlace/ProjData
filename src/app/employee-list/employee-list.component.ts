import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
  export class ViewEmployeeComponent implements OnInit {
    employees: any[] = [];

    constructor(private employeeService: EmployeeServiceService) { }

    ngOnInit(): void {
      this.employees = this.employeeService.getEmployees();
      this.employees.forEach(employee => employee.editing = false);

      console.log(this.employees)
    }

    editEmployee(employee: any): void {
      employee.editing = true;
    }

    

    saveEmployee(employee: any): void {
      employee.editing = false;
      // You can save the updated employee details here
      // For example:
      // this.employeeService.updateEmployee(employee);
    }

    cancelEdit(employee: any): void {
      employee.editing = false;
      // You can revert any changes made during editing here
      // For example:
      // this.employeeService.cancelEdit(employee);
    }

    deleteEmployee(employee: any): void {
      // Implement delete functionality
    }
  
  }