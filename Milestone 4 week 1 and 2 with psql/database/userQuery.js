import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import key from "../config/keys";
import db from './connector';
import validateRegisterInput from '../validator/register';
import validateLoginInput from '../validator/login';


function getAllUsers(ctx) {
    db.any('select * from users', [true])
        .then(data => {
            console.log('DATA:', data);
        })
        .catch(error => {
            console.log('ERROR:', error);
        })
}



function loginUser(ctx) {
    return new Promise(function (resolve, reject) {
        console.log("Request", ctx.request)
        let { errors, isValid } = validateLoginInput(ctx.request.body);

        if (!isValid) {
            reject(errors);
        }

        const { email, password } = ctx.request.body;
        db.any('select * from users where email=$1', [email])
            .then(data => {
                if (data[0] !== undefined) {
                    bcrypt.compare(password, data[0].password).then((isMatch) => {
                        if (isMatch) {
                            const payload = {
                                name: data[0].name
                            }
                            jwt.sign(
                                payload,
                                key,
                                {
                                    expiresIn: 31556926 // 1 year in seconds
                                },
                                (err, token) => {
                                    db.any('update users set jwt = $1 where email=$2', [token, email])
                                        .then(data => {
                                            resolve({
                                                success: true,
                                                token: "Bearer " + token
                                            });
                                        })
                                        .catch(err => {
                                            reject("Unable to save jwt");
                                        })
                                }
                            );
                        } else {
                            reject("Password Mismatch");
                        }
                    });

                } else {
                    reject("User Not Found")
                }
            })
            .catch(error => {
                reject("fail")
            })
    })
}

function registerUser(ctx) {
    return new Promise(function (resolve, reject) {
        let { errors, isValid } = validateRegisterInput(ctx.request.body);
        if (!isValid) {
            reject(errors);
        }
        let { name, email, password } = ctx.request.body;
        db.any('select * from users where email=$1', [email])
            .then(data => {
                if (data[0] !== undefined) {
                    resolve("Already");
                } else {
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(password, salt, (err, hash) => {
                            if (err) {
                                reject("HashError");
                            }
                            password = hash;
                            db.any(`insert into users (name, email, password) VALUES ($1, $2, $3)`, [name, email, password])
                                .then(data => {
                                    console.log('Registered', data);
                                    resolve("Registered");
                                })
                                .catch(error => {
                                    console.log('ERROR Register insert:', error);
                                    reject("DBError");
                                })
                        });
                    });

                }
            })
            .catch(error => {
                console.log("Error:", error);
                reject("DBError");
            })
    })
}

const userQuery = {
    getAllUsers,
    loginUser,
    registerUser
}


export default userQuery;