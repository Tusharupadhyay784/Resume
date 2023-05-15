const express = require('express');
const userModels = require('../model/userModel');
const router = express.Router();
// const { validateEmail, validatePassword } = require('../controller/validator')

//GET Request
router.get('/', async (req, res) => {
    const user = await userModels.find({})
    res.status(200).json({
        message: "Get Request Done",
        data: user
    })
})


//Creating User
// router.post('/create', async (req, res) => {
//     try {
//         console.log(req.body);
//         const { username, email, password } = req.body;
//         if (!validateEmail(email)) {
//             throw new Error("Email is not valid");
//         }
//         if (!validatePassword(password)) {
//             throw new Error("Password is not valid");
//         }
//         const userId = await userModels.create({
//             username, email, password
//         });
//         return res.status(200).json({
//             message: "User Created",
//             data: userId
//         })
//     }


//     catch (e) {
//         console.log(e.message);
//         return res.status(200).json({
//             message: e.message,
//             data: null
//         })
//     }
// })

// login User
router.post('/signin', async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const user = await userModels.findOne({ email });
        if (!user) {

            return res.status(400).json({
                message: "User not found",
                data: null,
            })
        }
        else {
            if (user.password !== password) {
                return res.status(300).json({
                    message: "Password does'nt match at all",
                    data: null
                })
            }
            else {
                return res.status(200).json({
                    message: "Welcome Back Logged In",
                    data: user
                })
            }
        }


    }
    catch (e) {
        return res.status(404).json({
            message: e.message,
            data: null
        })
    }
})



module.exports = router;