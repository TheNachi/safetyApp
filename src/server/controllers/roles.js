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

    retrieve(req, res) {
        db.Roles.findById(req.params.id)
            .then((role) => {
                if(!role) {
                    return res.status(404)
                        .send({ message: `Role with id: ${req.params.id} not found` });
                }
                res.send(role);
            })
    },
    update(req, res) {
        db.Roles.findById(req.params.id)
            .then((role) => {
                if(!role) {
                    return res.status(404)
                        .send({ message: `Role with id: ${req.params.id} not found` });
                }
                role.update(req.body)
                    .then((updatedRole) => {
                        res.send(updatedRole);
                    })
            })
    },
    destroy(req, res) {
        db.Roles.findById(req.params.id)
            .then((role) => {
                if(!role) {
                    return res.status(404)
                    .send({ message: `Role with id: ${req.params.id} not found` });
                }
                role.destroy()
                    .then(() => res.send({ message: `Role deleted successfully` }))
            })
    }
}