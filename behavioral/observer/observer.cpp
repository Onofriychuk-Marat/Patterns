// Патерн НАБЛЮДАТЕЛЬ определяет отношение
// один-ко-многим между объектами таким образом,
// что при изменении состояния одного объекта
// происходит автоматическое оповещение и обновление
// всех зависимых объектов.

#include <vector>
#include <iostream>

class Observer {
public:
    virtual void update(float temp, float humidity, float pressure) = 0;
};

class DisplayElement {
public:
    virtual void display() = 0;
};

class Subject {
public:
    virtual void registerObserver(Observer *observer) = 0;
    virtual void removeObserver(Observer *observer) = 0;
    virtual void notifyObservers(void) = 0;
};

class WeatherData : public Subject {
private:
    std::vector<Observer*>  _observers;
    float                   _temperature;
    float                   _humidity;
    float                   _pressure;

public:
    WeatherData() {
        _observers = std::vector<Observer*>();
    }

    void    registerObserver(Observer *observer) {
        _observers.push_back(observer);
    }

    void    removeObserver(Observer *observer) {
        std::vector<Observer*>::iterator begin = _observers.begin();
    
        while (begin != _observers.end()) {
            if (*begin == observer) {
                _observers.erase(begin);
                return ;
            }
            begin++;
        }
    }

    void    notifyObservers(void) {
        std::vector<Observer*>::iterator begin = _observers.begin();
    
        while (begin != _observers.end()) {
            (*begin)->update(_temperature, _humidity, _pressure);
            begin++;
        }
    }

    void    measurementsChanged() {
        notifyObservers();
    }

    void    setMeasurements(float temperature, float humidity, float pressure) {
        _temperature = temperature;
        _humidity = humidity;
        _pressure = pressure;
        measurementsChanged();
    }
};

class CurrentConditionsDisplay : public Observer, public DisplayElement {
private:
    float   _temperature;
    float   _humidity;
    Subject *_weatherData;

public:
    CurrentConditionsDisplay(Subject *weatherData) {
        _weatherData = weatherData;
        weatherData->registerObserver(this);
    }

    void update(float temperature, float humidity, float pressure) {
        _temperature = temperature;
        _humidity = humidity;
        display();
    }

    void display(void) {
        std::cout << "Temperature: " << _temperature << " | Humidity: " << _humidity << "\n";
    }
};

class CurrentPressureDisplay : public Observer, public DisplayElement {
private:
    float   _pressure;
    Subject *_weatherData;

public:
    CurrentPressureDisplay(Subject *weatherData) {
        _weatherData = weatherData;
        weatherData->registerObserver(this);
    }

    void update(float temperature, float humidity, float pressure) {
        _pressure = pressure;
        display();
    }

    void display(void) {
        std::cout << "Pressure: " << _pressure << "\n";
    }
};

int main(void) {
    WeatherData *weatherData = new WeatherData();

    CurrentConditionsDisplay *currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    CurrentPressureDisplay *currentPressureDisplay = new CurrentPressureDisplay(weatherData);

    weatherData->setMeasurements(1.1, 2.2, 3.3);
    std::cout << "------\n";
    weatherData->setMeasurements(4.4, 5.5, 6.6);
    free(weatherData);
    free(currentConditionsDisplay);
    free(currentPressureDisplay);
    return (0);
}
