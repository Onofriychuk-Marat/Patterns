/**
 * Интерфейс Субъекта объявляет общие операции как для Реального Субъекта, так и
 * для Заместителя. Пока клиент работает с Реальным Субъектом, используя этот
 * интерфейс, вы сможете передать ему заместителя вместо реального субъекта.
 */
interface Subject {
  request(): void;
}

/**
* Реальный Субъект содержит некоторую базовую бизнес-логику. Как правило,
* Реальные Субъекты способны выполнять некоторую полезную работу, которая к
* тому же может быть очень медленной или точной – например, коррекция входных
* данных. Заместитель может решить эти задачи без каких-либо изменений в коде
* Реального Субъекта.
*/
class RealSubject implements Subject {
  public request(): void {
      console.log('RealSubject: Handling request.');
  }
}

/**
* Интерфейс Заместителя идентичен интерфейсу Реального Субъекта.
*/
class Proxy implements Subject {
  private realSubject: RealSubject;

  /**
   * Заместитель хранит ссылку на объект класса РеальныйСубъект. Клиент может
   * либо лениво загрузить его, либо передать Заместителю.
   */
  constructor(realSubject: RealSubject) {
      this.realSubject = realSubject;
  }

  /**
   * Наиболее распространёнными областями применения паттерна Заместитель
   * являются ленивая загрузка, кэширование, контроль доступа, ведение журнала
   * и т.д. Заместитель может выполнить одну из этих задач, а затем, в
   * зависимости от результата, передать выполнение одноимённому методу в
   * связанном объекте класса Реального Субъект.
   */
  public request(): void {
      if (this.checkAccess()) {
          this.realSubject.request();
          this.logAccess();
      }
  }

  private checkAccess(): boolean {
      // Некоторые реальные проверки должны проходить здесь.
      console.log('Proxy: Checking access prior to firing a real request.');

      return true;
  }

  private logAccess(): void {
      console.log('Proxy: Logging the time of request.');
  }
}

/**
* Клиентский код должен работать со всеми объектами (как с реальными, так и
* заместителями) через интерфейс Субъекта, чтобы поддерживать как реальные
* субъекты, так и заместителей. В реальной жизни, однако, клиенты в основном
* работают с реальными субъектами напрямую. В этом случае, для более простой
* реализации паттерна, можно расширить заместителя из класса реального
* субъекта.
*/
function clientCode(subject: Subject) {
  // ...

  subject.request();

  // ...
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
clientCode(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy(realSubject);
clientCode(proxy);