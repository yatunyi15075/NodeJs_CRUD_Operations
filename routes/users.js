import express from "express";

const router = express.Router();

const users = [
    {
        firstName: "John",
        secondName: "Wambua",
        age: 22
    },
    {
        firstName: "Jane",
        secondName: "Doe",
        age: 21
    }
]

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);   
});

export default router;
