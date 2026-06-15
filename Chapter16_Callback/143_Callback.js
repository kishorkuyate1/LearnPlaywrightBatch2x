function print() {
    console.log("Normal Function is called");
}

function print1() {
    console.log("Normal Function is called 222");
}


function placeOrder(ClipboardItem, pramodCallback) {
    console.log("Hi, You order is placed   " + ClipboardItem);
    pramodCallback();
}

// First Way
//placeOrder("Pizza", print);

// Second Way
// placeOrder("Burger", function () {
//     console.log("Anoy Fn, I am also a function wihtout name!")
// });

// Third Way
placeOrder("Momos", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});