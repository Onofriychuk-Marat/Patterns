interface IObserver {
  update(): void;
}

interface ISubject {
  register(o: IObserver): void;
  remove(o: IObserver): void;
  notify(): void;
}


class Youtube implements ISubject {
  observers: IObserver[];
  data: number = 0;


  register(o: IObserver): void {
    this.observers.push(o);
  }
  remove(o: IObserver): void {
    this.observers.filter(v => v !== o);
  }
  notify(): void {
    this.observers.forEach(o => o.update());
  }

  getData(): number {
    return this.data;
  }

  setData(data: number): void {
    this.data = data;
  }
}

class Human implements IObserver {
  youtube: Youtube;

  constructor(youtube: Youtube) {
    this.youtube = youtube;
  }

  update() {
    console.log('>>>> ', this.youtube.getData());
  }
}

const youtube = new Youtube();

youtube.register(new Human(youtube));
youtube.register(new Human(youtube));
youtube.register(new Human(youtube));
youtube.register(new Human(youtube));
youtube.register(new Human(youtube));

youtube.setData(3);

