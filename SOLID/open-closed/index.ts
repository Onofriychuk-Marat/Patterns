// apply strategy pattern

interface IShipping {
  getCost(order: Order): number;
  getDate(order: Order): string;
}

class Order {
  shipping: IShipping;

  constructor(shipping: IShipping) {
    this.shipping = shipping;
  }

  getCost() {
    this.shipping.getCost(this);
  }

  getDate() {
    this.shipping.getDate(this);
  }
}

class Ground implements IShipping {
  getCost(order: Order): number {
    throw new Error("Method not implemented.");
  }
  getDate(order: Order): string {
    throw new Error("Method not implemented.");
  }
}

class Air implements IShipping {
  getCost(order: Order): number {
    throw new Error("Method not implemented.");
  }
  getDate(order: Order): string {
    throw new Error("Method not implemented.");
  }
}

(new Order(new Ground())).getCost();
(new Order(new Air())).getCost();
