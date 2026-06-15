let apiCall = new Promise(function (resolve, reject) {
    resolve("500 Error");
});

apiCall.then(function (data) {
    console.log("Success or Reject ")
}).catch(function (error) {
    console.log(error);
})