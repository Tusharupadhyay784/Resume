const express = require('express');
const userModels = require('../model/userModel');
const router = express.Router();
const { validateEmail, validatePassword } = require('../controller/validator')

router.post('/create', async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, password } = req.body;
        if (!validateEmail(email)) {
            throw new Error("Email is not valid");
        }
        if (!validatePassword(password)) {
            throw new Error("Password is not valid");
        }
        const userId = await userModels.create({
            username, email, password
        });
        return res.status(200).json({
            message: "User Created",
            data: userId
        })
    }


    catch (e) {
        console.log(e.message);
        return res.status(200).json({
            message: e.message,
            data: null
        })
    }
})
module.exports = router;