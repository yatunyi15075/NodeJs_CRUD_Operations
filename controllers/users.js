import { v4 as uuidv4 } from "uuid";


let users = [ ]

//this gets all the user
export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);   
}

//it creates/post a new user
export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} is added to the db ! `);
}

//gets a user based on an id
export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

//deletes/eliminates a user based on an id
export const deleteUser =  (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${user.id} and name ${user.firstName} has been deleted`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
}
