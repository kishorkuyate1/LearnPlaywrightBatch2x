abstract class Animal {

    // Abstract method (no implementation)
    abstract sound(): void;

    // Normal method
    eat(): void {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {

    sound(): void {
        console.log("Dog barks");
    }
}

const dog = new Dog();

dog.sound();
dog.eat();