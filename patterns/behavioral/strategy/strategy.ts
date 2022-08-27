
abstract class Duck {
  flybehavior: FlyBehavior;
  quackbehavior: QuackBehavior;

  abstract display();

  public performFly() {
    this.flybehavior.fly();
  }

  public performQuack() {
    this.quackbehavior.quack();
  }

  public setFlyBehavior(behavior: FlyBehavior) {
    this.flybehavior = behavior;
  }

  public setQuackBehavior(behavior: QuackBehavior) {
    this.quackbehavior = behavior;
  }
}

interface FlyBehavior {
  fly();
}


class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('fly with wings');
  }
}

class FlyNoWay implements FlyBehavior {
  fly() {
    console.log('fly no way');
  }
}

interface QuackBehavior {
  quack();
}

class Quack implements QuackBehavior {
  quack() {
    console.log('quack');
  }
}

class Squeak implements QuackBehavior {
  quack() {
    console.log('squeack');
  }
}

class MuteQuack implements QuackBehavior {
  quack() {
    console.log('mute quack');
  }
}

class MallardDuck extends Duck {

  constructor() {
    super();
    this.flybehavior = new FlyNoWay();
    this.quackbehavior = new Squeak();
  }

  display() {
    console.log('mallard duck');
  }
}

const mallardDuck = new MallardDuck();

mallardDuck.performFly();
mallardDuck.performQuack();

mallardDuck.setFlyBehavior(new FlyWithWings());
mallardDuck.setQuackBehavior(new MuteQuack());

mallardDuck.performFly();
mallardDuck.performQuack();
