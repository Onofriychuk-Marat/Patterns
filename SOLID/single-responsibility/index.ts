class Employee {
  private name;

  constructor(name: string) {
    this.name = name;
  }

  getName() { return this.name }
}

class SheetReport {
  static print(employe: Employee) {
    console.log('Employe: ', employe.getName());
  }
}

const employee = new Employee('Ivan');
SheetReport.print(employee);
