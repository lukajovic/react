class User {
    constructor(user) {

        this.firstName = user.name.first;
        this.lastName = user.name.last;
        this.email = user.email;
        this.picture = user.picture.large;
        this.gender = user.gender;
        this.date = user.dob;
    }
}

export default User;