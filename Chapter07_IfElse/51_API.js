let statusCode = 500;

if (statusCode == 200) {
    console.log("API are working fine!")
}

else if (statusCode == 404) {
    console.log("API not found!")
}
else if (statusCode == 500) {
    console.log("Server is not working")
}
else {
    console.log("No Matching status code found")
}