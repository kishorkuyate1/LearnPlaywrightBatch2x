class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Dog Barks");
    }
}
class Cat extends Animal {
    sound() {
        console.log("cat meows")
    }
}

const dog = new Dog();
const cat = new Cat();

dog.sound();
cat.sound();