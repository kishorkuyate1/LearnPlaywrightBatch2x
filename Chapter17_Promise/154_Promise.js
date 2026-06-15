let order = new Promise(function (resolve, reject) {
    let foodReady = false;
    if (foodReady) {
        resolve("Pizza is delivered ");
    }
    else (
        reject("Pizza will not deliver")
    )

});

console.log(order);