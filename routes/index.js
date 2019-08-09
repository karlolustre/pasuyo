const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register', (req, res) => {
    // console.log(req.body)
    let email = req.body.email;
    let password = req.body.password;

    if(!email || !password) {
        return res.json({
            'message' : 'Incomplete credentials'
        })
    }

    UserModel.find({'email' : email})
    .then ((users, err) => {
        if(err) {
            return res.json({
                'message' : 'an error occured'
            })
        }

        if(users.length > 0) {
            return res.json({
                'message' : 'User already exists'
            })
        }

        //bcrypt password
        bcrypt.genSalt(10, function(err, salt) {
            // console.log(salt)
            bcrypt.hash(password, salt, function(err, hash) {
                // console.log(hash)
                let newUser = UserModel({
                    'email' : req.body.email,
                    'password' : hash
                })
                // console.log(newUser)
                newUser.save(err => {
                    if(!err) {
                        return res.json({
                            'message' : 'User Registered Successfully'
                        })
                    }
                })
            })
        })
    })
})



module.exports = router;