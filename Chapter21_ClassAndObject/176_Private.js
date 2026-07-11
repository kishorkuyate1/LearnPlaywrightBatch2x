class Credentials {
    #apiKey;

    constructor(user, apiKey) {
        this.user = user;
        this.#apiKey = apiKey;
    }

    kishorAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("Kishor", "API*987");

console.log(cred.user);

const token = cred.kishorAuthHeader();
console.log(token);