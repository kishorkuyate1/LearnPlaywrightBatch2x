const user = {
    firstName: "Kishor",
    lastname: "Patil",
    get FullName() {
        return this.firstName + this.lastname;
    }, set FullName(value) {
        [this.firstName, this.lastname] = value.splite(" ");
    }
}
console.log(user.FullName);