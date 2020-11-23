import User from "../../entites/User";

class UserService {
    fetchUsers() {
        return fetch('https://randomuser.me/api/?results=50')
            .then((response) => {
                return response.json()
            })
            .then(data => {
                return data.results.map(user => new User(user))
            })
    }
}

export const userService = new UserService();