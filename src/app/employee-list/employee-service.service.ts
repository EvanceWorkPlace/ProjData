import { Injectable } from '@angular/core';
import { NgClass } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private employees: any[] = [];

  constructor() {
    // Sample data for demonstration
    this.employees = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'MichaeJohnsonl Johnson' },
      { id: 4, name: 'buddhae buk' },
      { id: 5, name: 'Jonaith Rub' },
      { id: 6, name: 'Michael Johnson' }
    ];
  }

  // Create
  addEmployee(name: string): void {
    const id = this.generateId();
    this.employees.push({ id, name });
  }

  // Read
  getEmployees(): any[] {
    return this.employees.map(employee => ({ ...employee, editing: false }));
  }

  // Update
  updateEmployee(updatedEmployee: any): void {
    const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  // Delete
  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }

  // Utility function to generate unique ID
  private generateId(): number {
    return this.employees.length > 0 ? Math.max(...this.employees.map(emp => emp.id)) + 1 : 1;
  }
}
