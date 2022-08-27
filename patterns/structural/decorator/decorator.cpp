#include <iostream>
#include <string>

class Beverage {
protected:
    std::string _description;

public:
    virtual std::string getDescription() {
        return (_description);
    }

    virtual double cost(void) = 0;
};

class CondimentDecorator : public Beverage {
public:
    virtual std::string getDescription(void) = 0;
};

class Expresso : public Beverage {
public:
    Expresso() {
        _description = "Expresso";
    }

    double cost(void) {
        return (1.99);
    }
};

class DarkRoast : public Beverage {
public:
    DarkRoast() {
        _description = "Dark roast";
    }

    double cost(void) {
        return (1.12);
    }
};

class HouseBlend : public Beverage {
public:
    HouseBlend() {
        _description = "House Blend Coffe";
    }

    double cost() {
        return (0.89);
    }
};

class Mocha : public CondimentDecorator {
private:
    Beverage *_beverage;

public:
    Mocha(Beverage *beverage) {
        _beverage = beverage;
    }

    ~Mocha() {
        free(_beverage);
    }

    std::string getDescription(void) {
        return (_beverage->getDescription() + ", Mocha");
    }

    double cost() {
        return (_beverage->cost() + 0.20);
    }
};

class Soy : public CondimentDecorator {
private:
    Beverage *_beverage;

public:
    Soy(Beverage *beverage) {
        _beverage = beverage;
    }

    ~Soy() {
        free(_beverage);
    }

    std::string getDescription(void) {
        return (_beverage->getDescription() + ", Soy");
    }

    double cost() {
        return (_beverage->cost() + 0.60);
    }
};

class Whip : public CondimentDecorator {
private:
    Beverage *_beverage;

public:
    Whip(Beverage *beverage) {
        _beverage = beverage;
    }

    ~Whip() {
        free(_beverage);
    }

    std::string getDescription(void) {
        return (_beverage->getDescription() + ", Whip");
    }

    double cost() {
        return (_beverage->cost() + 0.04);
    }
};

int main(void) {
    Beverage *beverage = new Expresso();
    std::cout << "1) " << beverage->getDescription() << " $" << beverage->cost() << "\n";

    Beverage *beverage2 = new DarkRoast();
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    std::cout << "2) " << beverage2->getDescription() << " $" << beverage2->cost() << "\n";

    Beverage *beverage3 = new HouseBlend();
    beverage3 = new Soy(beverage3);
    beverage3 = new Mocha(beverage3);
    beverage3 = new Whip(beverage3);
    std::cout << "3) " << beverage3->getDescription() << " $" << beverage3->cost() << "\n";

    free(beverage);
    free(beverage2);
    free(beverage3);
    return (0);
}