class Singleton {
  static instance: Singleton;

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}
