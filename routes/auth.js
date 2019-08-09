const express = require('express')

const router = express.Router()

//jwt for json web token generation/sign
const jwt = require('jsonwebtoken')

//passport for auth
const passport = require('passport')

const appPassport = require('../passport')



//login user to system
router.post('/login', (req, res, next) => {
   
    passport.authenticate('local', {session: false}, (err, user, info) => {
        //request unauthorized if unable to validate
        if(err || !user) {
            return res.status(400).json({
                'error' : "something is not right"
            })
        }

        console.log('success')

        req.login(user, {session: false}, (err) => {
            if(err) {
                res.send(err)
            }

            //create json web token
            const token = jwt.sign(user.toJSON(), 'josephcantos', {
                expiresIn: '30m'})
            return res.status(200).json({
                'data' : {
                    'user' : user,
                    'token' : token
                }
            })
        })
    })(req, res);
})

//logout
router.get('/logout', (req, res) => {
    console.log('user is logged out')
    req.logout()
    res.json({
        status: 'logout',
        msg : 'please log in'
    })
})


module.exports = router