// let fruite=['apple','banana','mango','grapes'];
// console.log(fruite[0]);
// console.log(fruite.length);


// let mix1=[10, "Pass", true];
// console.log(mix1);

// let arr=[1,2,3,4];
// console.log(arr);
// arr.push(5);
// console.log(arr);

// arr.pop();
// console.log(arr);
// arr.push(5, 6);
// console.log(arr);

// arr.unshift(0);
// console.log(arr);

// arr.shift(0);
// console.log(arr);


// let status1=['pass','fail','pending','pass','fail'];
// console.log(status1.indexOf('pass'));
// console.log(status1.indexOf('skip'));
// console.log(status1.lastIndexOf('fail'));

// let nums2=[10,20,30,40];
// let r=nums2.find(x=>x>25);
// console.log(r);
// let r1=nums2.find(x=>x<25);
// console.log(r1);

// let scroresR=[55,65,45,75,93];
// let result1=scroresR.map(s=>s>60? "Pass": "Fail");
// console.log(result1);

// let passing = scroresR.filter(s => s > 70);
// console.log(passing);

// let total= scroresR.reduce((a,b) =>a+b,0);
// console.log(total);

// // flat — flattens nested arrays
// let nested = [[1, 2], [3, 4], [5]];
// console.log(nested.flat());

// let arr3=[1,2,3,4,5,6,7,8,9,0];
// console.log(arr3.slice(1,5));
// console.log(arr3.slice(2));
// console.log(arr3.slice(-2));

// let r=Array.isArray([1,2,3]);
// console.log(r);
// let result = Array.isArray([1, 2, 3]);
// console.log(result); // true

let arr4=[10,20,30,40,50,60,70];

let rS2=arr4.splice(2,4);
console.log(arr4);
console.log(rS2);

console.log(arr4.every(s=>s>9));
console.log(arr4.every(s=>s>15));

console.log(arr4.some(s=>s>25));


