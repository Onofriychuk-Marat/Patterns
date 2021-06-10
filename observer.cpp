// Паттерн НАБЛЮДАТЕЛЬ определяет отношение
// один-ко-многим между объектами таким образом,
// что при изменении состояния одного объекта
// происходит автоматическое оповещение и обновление
// всех зависимых объектов.

class Subject {
public:
    virtual void registerOberver(Observer observer) = 0;
    virtual void removeObserver(Observer observer) = 0;
    virtual void notifyObservers(void) = 0;
};

class Observer {
public:
    virtual void update(float temp, float humidity, float pressure) = 0;
};

class DisplayElement {
public:
    virtual void display() = 0;
};

int main(void) {
    
    return (0);
}