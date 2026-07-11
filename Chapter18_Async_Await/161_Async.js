async function testAPI() {
    try {
        let result = await Promise.reject("503 Reject");
    }
    catch (error) {
        console.log("Error ", error);
    }
    finally {
        console.log("Clean up!!")

    }

}
testapi();