abstract class Beverage {
  protected description: string;

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}

abstract class ConfimentDecorator extends Beverage {
  protected beverage: Beverage;
  abstract getDescription(): string;
}

class Expresso extends Beverage {
  constructor() {
    super();
    this.description = "Expresso";
  }

  cost(): number {
    return (1.99);
  }
}

class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "DarkRoast";
  }

  cost(): number {
    return (1.12);
  }
}

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "HouseBlend";
  }

  cost(): number {
    return (0.89);
  }
}

class Mocha extends ConfimentDecorator {
  
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription + ", Mocha";
  }

  cost(): number {
    return this.beverage.cost() + 0.20;
  }
}

class Soy extends ConfimentDecorator {
  
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription + ", Soy";
  }

  cost(): number {
    return this.beverage.cost() + 0.12;
  }
}

class Whip extends ConfimentDecorator {
  
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription + ", Whip";
  }

  cost(): number {
    return this.beverage.cost() + 0.12;
  }
}

const beverage = new Expresso();
console.log('1) ', beverage.getDescription(), ' ', beverage.cost());

let beverage2 = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Soy(beverage2);
beverage2 = new Whip(beverage2);

console.log('1) ', beverage2.getDescription(), ' ', beverage2.cost());
