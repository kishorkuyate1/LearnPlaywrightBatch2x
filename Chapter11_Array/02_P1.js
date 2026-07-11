// prompt() accepts user input as a STRING.
let num = prompt("Enter a number:");

// Convert string to number
num = Number(num);

// Check if number is even
// % is Modulus Operator
// It returns the remainder after division.

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}