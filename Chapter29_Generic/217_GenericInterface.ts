interface Employee<T>{
    id:T;
    name:string;
}
const emp:Employee<number>={
    id:101,
    name:"Kishor"
};
console.log(emp);
