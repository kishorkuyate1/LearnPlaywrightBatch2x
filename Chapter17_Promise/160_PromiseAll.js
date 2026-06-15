Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r) {
        console.log(r);
    });
});