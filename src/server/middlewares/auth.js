import jwt from 'jsonwebtoken';
import db from '../models/';

export default {
    
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