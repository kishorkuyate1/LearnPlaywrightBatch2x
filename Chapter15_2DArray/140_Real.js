let testMatrix = [
    ["Login", "Pass", 200],
    ["Logout", "Fail", 400],
    ["Buy", "Pending", 300]
]

// for (let i = 0; i < testMatrix.length; i++) {
//     for (let j = 0; j < testMatrix[i].length; j++) {
//         console.log(testMatrix[i][j]);
//     }
//     console.log("")
// }

// for (let row of testMatrix) {
//     for (let cell of row) {
//         process.stdout.write(cell + " ")
//     }
//     console.log();
// }

testMatrix.forEach(row => {
    row.forEach(
        cell => process.stdout.write(cell + " ")
    );
    console.log();
});