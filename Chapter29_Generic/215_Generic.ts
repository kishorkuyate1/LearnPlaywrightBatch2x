function getFirstResult<T>(results:T[]){
    return results;
    function getFirstResult<T>(resuts: T[]) {
        return resuts[0]!;   // ← "trust me, not null/undefined"
    }
}
let firstCode = getFirstResult<number>([200, 400, 500]);
let firstTest = getFirstResult<string>(["Login", "Signup", "Cart"]);

console.log("First code:", firstCode);
console.log("First test:", firstTest);