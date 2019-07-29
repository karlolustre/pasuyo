const passport = require('passport');

const passportJWT = require('passport-jwt');

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;

const JWTStrategy = passportJWT.Strategy;

const UserModel = require('./models/User');

const bcrypt = require('bcrypt');

//passport.js to use the local strategy
passport.use( new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
    UserModel.findOne({ 'email' : email})

    .then((user) => {
        console.log(user)

        if(!user) {
            return done(null, false, { message : "Invalid Credentials"})
        }
        if (email == user.email) {
            //verify password hash compared to stored password
            if(!bcrypt.compareSync(password, user.password)) {
                return done(null, false, { message : "Invalid Credentials"})
            }
            
            return done(null, user)
        }
        return done(null, false, { message : 'Invalid Credentials'})
    })
}))


//configure passport for jwt usage verification
passport.use(new JWTStrategy({
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'josephcantos'
},
function(jwtPayload, cb) {
    return UserModel.findOne(jwtPayload.id)
    .then(user => {
        return cb(null, user)
    })
    .catch(err => {
        return cb(err)
    })
}))
