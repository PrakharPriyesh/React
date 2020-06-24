const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
import keys from './keys';
import db from './../database/connector';



module.exports = passport => {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = keys;
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            db.any('select * from users where jwt=$1', [jwt_payload])
                .then(data => {
                    if (data[0] !== undefined) {
                        return done(null, data[0]);
                    } else {
                        return done(null, false);
                    }
                })
                .catch(error => {
                    console.log("Error Passport : " + error);
                })

        })
    )
}
