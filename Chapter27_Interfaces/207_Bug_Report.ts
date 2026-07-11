interface bugReport{
    id: number;
    title: String;
    severity: String;
    stepToReproduce: any;
}

const bugReport1: bugReport={
    id:1,
     title: "title",
    severity: "High",
    stepToReproduce: ["step1", "step"]

}
const bugReport2: bugReport={
    id:2,
     title: "title",
    severity: "High",
    stepToReproduce: ["step1", "step"]

}
console.log(bugReport1);