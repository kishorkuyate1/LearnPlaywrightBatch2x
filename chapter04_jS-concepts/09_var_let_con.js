let l = 10;
var v = 15;
const c = 5.56

var browserName = 'chrome';
var browserName = 'fireFox';
browserName = "oper";

var testCases = ["Singin", "SignOut", "logOut"]
for (var i = 0; i < testCases.length; i++) {
    console.log("Running Test : " + testCases[i])
}
console.log("Loop counter leaked outside:", i);
