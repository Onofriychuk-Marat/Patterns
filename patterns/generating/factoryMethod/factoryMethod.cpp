// Паттерн ФАБРИЧНЫЙ МЕТОД определяет интерфейс создания объекта,
// но позволяет субклассам выбрать класс создаваемого экземпляра.
// Таким образом, Фабричный Метод делегирует операцию создания
// экземпляра субклассам.

#include <iostream>
#include <string>
#include <vector>

class SimplePizzaFactory {
public:
    static Pizza *createPizza(std::string type) {
        Pizza *pizza = NULL;

        if (type == "cheese") {
            pizza = new CheesePizza();
        } else if (type == "pepperoni") {
            pizza = new PepperoniPizza();
        } else if (type == "clam") {
            pizza = new ClamPizza();
        } else if (type == "veggie") {
            pizza = new VeggiePizza();
        }
        return (pizza);
    }
};

class PizzaStore {
private:
    SimplePizzaFactory *_factory;

public:
    PizzaStore(SimplePizzaFactory *factory) {
        _factory = factory;
    }

    Pizza *orderPizza(std::string type) {
        Pizza pizza;
    
        pizza = _factory->createPizza(type);
        pizza->prepare();
        pizza->bake();
        pizza->cut();
        pizza->box();
        return (pizza);
    }
};

int main(void) {

    return (0);
}