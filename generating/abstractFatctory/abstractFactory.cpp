// Паттерн ФАБРИЧНЫЙ МЕТОД определяет интерфейс создания объекта,
// но позволяет субклассам выбрать класс создаваемого экземпляра.
// Таким образом, Фабричный Метод делегирует операцию создания
// экземпляра субклассам.

#include <iostream>
#include <string>
#include <vector>

// class SimplePizzaFactory {
// public:
//     static Pizza *createPizza(std::string type) {
//         Pizza *pizza = NULL;

//         if (type == "cheese") {
//             pizza = new CheesePizza();
//         } else if (type == "pepperoni") {
//             pizza = new PepperoniPizza();
//         } else if (type == "clam") {
//             pizza = new ClamPizza();
//         } else if (type == "veggie") {
//             pizza = new VeggiePizza();
//         }
//         return (pizza);
//     }
// };

// class PizzaStore {
// private:
//     SimplePizzaFactory *_factory;

// public:
//     PizzaStore(SimplePizzaFactory *factory) {
//         _factory = factory;
//     }

//     Pizza *orderPizza(std::string type) {
//         Pizza pizza;
    
//         pizza = _factory->createPizza(type);
//         pizza->prepare();
//         pizza->bake();
//         pizza->cut();
//         pizza->box();
//         return (pizza);
//     }
// };

class Pizza {
protected:
    std::string                 _name;
    std::string                 _dough;
    std::string                 _sauce;
    std::vector<std::string>    _toppings;

public:
    void prepare() {
        std::cout << "Praparing " << _name << "\n";
        std::cout << "Tossin dough...\n";
        std::cout << "Adding sauce...\n";
        std::cout << "Adding toppings: ";
        for (int i = 0; i < _toppings.size(); i++) {
            std::cout << " " << _toppings[i] << "\n";
        }
    }

    void bake() {
        std::cout << "Bake for 25 minutes at 350\n";
    }

    void cut() {
        std::cout << "Cutting the pizza into diagonal slices\n";
    }

    void box() {
        std::cout << "Place pizza in official PizzaStore box\n";
    }

    std::string getName(void) {
        return (_name);
    }
};

class NYStyleCheesePizza : public Pizza {
public:
    NYStyleCheesePizza() {
        _name = "NY Style Sauce and Cheese Pizza";
        _dough = "Thin Crust Dough";
        _sauce = "Marinara Sauce";

        _toppings.push_back("Grated Regiano Cheese");
    }
};

class ChicagoStyleCheesePizza : public Pizza {
public:
    ChicagoStyleCheesePizza() {
        _name = "Chicago Style Deep Dish Cheese Pizza";
        _dough = "Extra Thick Crust Dough";
        _sauce = "Plum Tomato Sauce";

        _toppings.push_back("Shredded Mozzarella Cheese");
    }

    void cut() {
        std::cout << "Cutting the pizza into square slices";
    }
};

class CaliforniaStyleCheesePizza : public Pizza {
public:
    CaliforniaStyleCheesePizza() {
        _name = "California Style Deep Dish Cheese Pizza";
        _dough = "Extra Thick Crust Dough";
        _sauce = "Plum Tomato Sauce";

        _toppings.push_back("Shredded Mozzarella Cheese");
    }

    void cut() {
        std::cout << "Cutting the pizza into square slices";
    }
};

class PizzaStore {
private:

public:
    Pizza *orderPizza(std::string type) {
        Pizza *pizza;
    
        pizza = createPizza(type);
        pizza->prepare();
        pizza->bake();
        pizza->cut();
        pizza->box();
        return (pizza);
    }

    virtual Pizza *createPizza(std::string type) = 0;
};

class NYPizzaStore : public PizzaStore {
private:
    Pizza *createPizza(std::string type) {
        if (type == "cheese") {
            return (new NYStyleCheesePizza());
        } else if (type == "veggie") {
            // return (new NYStyleVeggiePizza());
        } else if (type == "clam") {
            // return (new NYStyleClamPizza());
        } else if (type == "pepperoni") {
            // return (new NYStylePepperoniPizza());
        }
        return (NULL);
    }
};

class ChicagoPizzaStore : public PizzaStore {
private:
    Pizza *createPizza(std::string type) {
        if (type == "cheese") {
            return (new ChicagoStyleCheesePizza());
        } else if (type == "veggie") {
            // return (new ChicagoStyleVeggiePizza());
        } else if (type == "clam") {
            // return (new ChicagoStyleClamPizza());
        } else if (type == "pepperoni") {
            // return (new ChicagoStylePepperoniPizza());
        }
        return (NULL);
    }
};

class CaliforniaPizzaStore : public PizzaStore {
private:
    Pizza *createPizza(std::string type) {
        if (type == "cheese") {
            return (new CaliforniaStyleCheesePizza());
        } else if (type == "veggie") {
            // return (new CaliforniaStyleVeggiePizza());
        } else if (type == "clam") {
            // return (new CaliforniaStyleClamPizza());
        } else if (type == "pepperoni") {
            // return (new CaliforniaStylePepperoniPizza());
        }
        return (NULL);
    }
};

int main(void) {
    PizzaStore *nyStore = new NYPizzaStore();
    PizzaStore *chicagoStore = new ChicagoPizzaStore();

    Pizza *pizza = nyStore->orderPizza("cheese");
    std::cout << "Ethan ordered a " << pizza->getName() << "\n";

    free(pizza);
    pizza = chicagoStore->orderPizza("cheese");
    std::cout << "Joel ordered a " << pizza->getName() << "\n";
    free(pizza);
    free(nyStore);
    free(chicagoStore);
    return (0);
}
