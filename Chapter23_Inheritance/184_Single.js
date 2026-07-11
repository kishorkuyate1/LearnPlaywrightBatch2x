class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

const dog = new Dog();

dog.eat();   // Inherited
dog.bark();  // Own method