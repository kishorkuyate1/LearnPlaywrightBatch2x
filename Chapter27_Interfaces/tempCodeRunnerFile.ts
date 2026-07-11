interface TestCases {
    id: number;
    name: string;
    status: string;
    duration: number;

}
let tc1: TestCases = {
    id: 1,
    name: "Login",
    status: "pass",
    duration: 3000
}
console.log("TC" + tc1.name + " " + tc1.status);
let tc2: TestCases = {
    id: 2,
    name: "LogOut",
    status: "Fail",
    duration: 3000
}
console.log("TC" + tc2.name + " " + tc2.status);

