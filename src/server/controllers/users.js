import bcrypt from 'bcrypt';
import db from '../models/';

export default {

    create(req, res) {
        db.Users.create(req.body)
            .then((user) => {
                res.status(201).send(user)
            })
            .catch((err) => {
                res.status(400).send(err.errors)
            })
    },

    list(req, res) {
        db.Users.findAll()
            .then((roles) => {
                res.send(roles);
            })
    },

    retrieve(req, res) {
        db.Users.findById(req.params.id)
            .then((user) => {
                if (!user) {
                    return res.status(404)
                        .send({ message: `User with id ${req.params.id} not found`})
                }
                res.send(user);
            })
    },

    update(req, res) {
        db.Users.findById(req.params.id)
            .then((role) => {
                if (!role) {
                    return res.status(404)
                        .send({ message: `User with id ${req.params.id} not found` })
                }
                role.update(req.body)
                    .then((updatedUser) => {
                        res.send(updatedUser);
                    });
            });
    },

    destroy(req, res) {
        db.Users.findById(req.params.id)
            .then((user) => {
                if (!user) {
                    return res.status(404)
                        .send({ message: `User with id ${req.params.id} not found` })
                }
                user.destroy()
                    .then(() => res.send({ message: 'User deleted successfully.' }))
            })
    },

    login(req, res) {
        const { email, password } = req.body;

        db.Users.findOne({
            where: {
                email,
            }
        })
        .then((user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(201)
                    .send(user)
            } else {
                res.status(401)
                    .json({
                        message: 'Please enter a valid email or password to log in'
                    })
            }
        }))
    },

    logout() {

    },

    search(req, res) {
        const query = {
            where: {
                $or: [{
                    firstname: {
                        $iLike: `%${req.query.q}%`
                    }
                }, {
                    lastname: {
                        $iLike: `%${req.query.q}%`
                    }
                }, {
                    email: {
                        $iLike: `%${req.query.q}%`
                    }
                }, {
                    roleId: {
                        $iLike: `%${req.query.q}%`
                    }
                }, {
                    department: {
                        $iLike: `%${req.query.q}%`
                    }
                }, {
                    staffId: {
                        $iLike: `%${req.query.q}%`
                    }
                }]
            },
            limit: req.query.limit || 10,
            offset: req.query.offset || 0,
            order: [['createdAt', 'DESC']]
        };
        db.Users.findAndCountAll(query)
            .then((users) => {
                res.status(200)
                    .send(users)
            })
    }
}