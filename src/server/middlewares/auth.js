import jwt from 'jsonwebtoken';
import db from '../models/';

export default {

    verifyToken(req, res, next) {
        const token = req.headers.authorization || req.headers['x-access-token'];
        if (!token) {
            return res.status(401).send({ message: 'Unauthorized Access' })
        }
        jwt.verify(token, process.env.MY_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: 'Invalid Token'})
            }
            req.decoded = decoded;
            next();
        })
    },

    permitSelfOrAdmin(req, res, next) {
        db.Users.findById(req.params.id)
            .then((user) => {
                console.log(req.decoded)
                if (user.id === req.decoded.id || req.decoded.roleId === 2) {
                    next()
                } else {
                    return res.status(401).send({ message: 'You don\'t have the rights to perform this operation' })
                }
            })
            .catch((err) => {
                res.status(400).send({ message: 'You must have inputed a wrong userId, please confirm'})
            })
    },

    permitAdmin(req, res, next) {
        db.Roles.findById(req.decoded.roleId)
            .then((role) => {
                if (role.roleName === 'admin') {
                    next();
                } else {
                    return res.status(403).send({ message: 'Your are not an admin' })
                }
            })
    },
    
    validateLoginInput(req, res, next) {
        if (!req.body.password || !req.body.email ) {
            return res.status(400)
                .send({
                    message: 'Please provide your email and password to login'
                });
        }

        const email = /\w+/g.test(req.body.email);
        const password = /\w+/g.test(req.body.password);

        if (!email || !password) {
            return res.status(400)
                .send({
                    message: 'Please enter a valid email and password'
                })
        }
        next();
    },

    validateUserInput(req, res, next) {
        let firstname = /\w+/g.test(req.body.firstname);
        let lastname = /\w+/g.test(req.body.lastname);
        let email = /\S+@\S+\.\S+/.test(req.body.email);
        let password = /\w+/g.test(req.body.password);
        let department = /\w+/g.test(req.body.department);
        let staffId = /\w+/g.test(req.body.staffId);

        if (!firstname) {
            return res.status(400)
                .send({
                message: 'Enter a valid firstName'
                });
        }
        if (!lastname) {
            return res.status(400)
                .send({
                message: 'Enter a valid lastName'
                });
            }
        if (!email) {
            return res.status(400)
                .send({
                message: 'Enter a valid email'
                });
        }
        if (!password) {
            return res.status(400)
                .send({
                message: 'Enter a valid password'
                });
        }
        if (!department) {
            return res.status(400)
                .send({
                message: 'Enter a valid department'
                });
            }
        if (!staffId) {
            return res.status(400)
                .send({
                message: 'Enter a valid staffId'
                });
            }

        if (req.body.password && req.body.password.length < 8) {
            return res.status(400)
                .send({
                message: 'Minimum of 8 characters is allowed for password'
                });
        }

        db.Users.findOne({ where: { email: req.body.email } })
            .then((user) => {
                if (user) {
                    return res.status(409)
                        .send({
                            message: 'email already exists'
                        })
                }
                db.Users.findOne({ where: { staffId: req.body.staffId } })
                    .then((newUser) => {
                        if (newUser) {
                            return res.status(409)
                                .send({
                                    message: 'staffId already exists'
                                })
                        }
                        firstname = req.body.firstname;
                        lastname = req.body.lastname;
                        email = req.body.email;
                        password = req.body.password;
                        department = req.body.department;
                        staffId = req.body.staffId;
                        const roleId = req.body.roleId || 1;
                        req.userInput = {firstname, lastname, email, password, department, staffId, roleId };
                        next()
                    })
            })

    
    }
}