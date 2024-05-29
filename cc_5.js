// U51313007
// Implement Employee class with name, salary properties, and annual salary calculation

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    console.log(`Employee Name: ${this.name} Monthly Salary: ${this.salary}`);
  }

  get annualSalary() {
    return this.salary * 12;
  }
}
