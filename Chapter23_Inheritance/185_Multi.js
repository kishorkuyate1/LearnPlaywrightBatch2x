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

class Puppy extends Dog {
    sleep() {
        console.log("Puppy is sleeping");
    }
}

const puppy = new Puppy();

puppy.eat();
puppy.bark();
puppy.sleep();

