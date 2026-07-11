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

class Cat extends Animal {
    meow() {
        console.log("Cat is meowing");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.eat();
dog.bark();

cat.eat();
cat.meow();