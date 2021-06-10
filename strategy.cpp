// Патерн СТРАТЕГИЯ определяет семейство алгоритмов, инкапсулируем
// каждый из них и обеспечивает их взаимозаменяемость.
// Он позволяет модифицировать алгоритмы независимо от
// их использования на стороне клиента.

#include <iostream>

class WriteCode {
public:
    virtual void write(void) = 0;
};

class WriteCodeSwift : public WriteCode {
public:
    virtual void write(void) {
        std::cout << "I am writing code in swift\n";
    }
};

class WriteCodeJavaScript : public WriteCode {
public:
    virtual void write(void) {
        std::cout << "I am writing code in javascript\n";
    }
};

class WriteCodePython : public WriteCode {
public:
    virtual void write(void) {
        std::cout << "I am writing code in python\n";
    }
};

class Programmer {
protected:
    WriteCode *_writeCode;

public:
    Programmer() {}

    ~Programmer() {
        free(_writeCode);
    }

    virtual void writeCode(void) {
        _writeCode->write();
    }

    virtual void setWriteCode(WriteCode *newWriteCode) {
        _writeCode = newWriteCode;
    }

    virtual void hello(void) {
        std::cout << "Hello!\n";
    }
};

class ProgrammerIvan : public Programmer {
public:
    ProgrammerIvan() {
        _writeCode = new WriteCodeJavaScript();
    }
};

int main(void) {
    Programmer *ivan = new ProgrammerIvan();

    ivan->hello();
    ivan->writeCode();
    ivan->setWriteCode(new WriteCodePython());
    ivan->writeCode();
    return (0);
}
