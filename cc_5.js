// U51313007
// Implement Employee class with name, salary properties, and annual salary calculation

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    console.log(`Employee Name: ${this.name} Monthly Salary: ${this.salary}`);
  }

  getAnnualSalary() {
    return this.salary * 12;
  }
}
//Create Manager subclass with bonus calculation
  class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary); //call parent constructor
        this.department = department;
    }

// Instantiate Manager objects and calculate annual salaries with bonuses
    getAnnualSalary() {
        const baseAnnualSalary = super.getAnnualSalary();
        const bonus = baseAnnualSalary * 0.15;
        const totalAnnualSalary = baseAnnualSalary + bonus;
        console.log(`Bonus for ${this.name} (Department: ${this.department}): ${bonus.toFixed(2)}`);
return totalAnnualSalary;
    }
  }

// Test data for manager objects
  const manager1 = new Manager(`Bob Ross`, 6600, `Digital Marketing`);
  const manager2 = new Manager(`Debbie Little`, 7205, `Finance`);

  console.log(`Total Annual Salary for ${manager1.name}: ${manager1.getAnnualSalary().toFixed(2)}`);
  console.log(`Total Annual Salary for ${manager2.name}: ${manager2.getAnnualSalary().toFixed(2)}`);

