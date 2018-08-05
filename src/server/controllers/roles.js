import db from '../models';

export default {
    create(req, res) {
        db.Roles.create(req.body)
            .then((role) => {
                res.status(201).send(role);
            })
            .catch((err) => {
                console.log(err)
                res.status(400).send(err.errors);
            });
    },

    list(req, res) {
        db.Roles.findAll().then((role) => {
            res.send(role)
        });
    },
}