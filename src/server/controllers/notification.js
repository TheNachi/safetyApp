import db from '../models';

export default {
    create(req, res) {
        db.Notification.create(req.body)
            .then((role) => {
                res.status(201).send(role);
            })
            .catch((err) => {
                console.log(err)
                res.status(400).send(err.errors);
            });
    },

    list(req, res) {
        db.Notification.findAll()
            .then((notification) => {
                if(!role) {
                    return res.status(404)
                        .send({ message: 'No notification found' })
                }
                res.send(notification)
        });
    },

    retrieve(req, res) {
        db.Notification.findById(req.params.id)
            .then((notification) => {
                if(!notification) {
                    return res.status(404)
                        .send({ message: `Notification with id: ${req.params.id} not found` });
                }
                res.send(notification);
            })
    },
    update(req, res) {
        db.Roles.findById(req.params.id)
            .then((notification) => {
                if(!notification) {
                    return res.status(404)
                        .send({ message: `Notification with id: ${req.params.id} not found` });
                }
                notification.update(req.body)
                    .then((updatedNotification) => {
                        res.send(updatedNotification);
                    })
            })
    },
    destroy(req, res) {
        db.Notification.findById(req.params.id)
            .then((notification) => {
                if(!notification) {
                    return res.status(404)
                    .send({ message: `Notification with id: ${req.params.id} not found` });
                }
                notification.destroy()
                    .then(() => res.send({ message: `Notification deleted successfully` }))
            })
    }
}