class TestCases {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;

    }
    display() {
        console.log(this.name + "   " + this.status + "   " + this.priority);
    }
}
function f1() {

}

let loginTC1 = new TestCases("Login", "Pass", "1");
let loginTC2 = new TestCases("SingOut", "Pass", "2");

loginTC1.display();
loginTC2.display();
