let url = "https://staging.vwo.com/api/login?retry=true";

console.log(url.includes("staging"));
console.log(url.includes("Production"));
// startsWith / endsWith
url.startsWith("https"); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true


// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log("Value");
console.log(url.indexOf("nothere"));
console.log(url.indexOf("x"));

//
console.log(url.search(/login/));
console.log(url.search(/vwo/));

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 