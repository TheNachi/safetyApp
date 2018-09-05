import express from 'express';
import Content from '../controllers/contents';
import auth from '../middlewares/auth'


const content = express.Router();

content.route('/roles')
    .post(auth.verifyToken, auth.permitAdmin, Roles.create)
    .get(auth.verifyToken, auth.permitAdmin, Roles.list);

content.route('/roles/:id')
    .get(auth.verifyToken, auth.permitAdmin, Roles.retrieve)
    .put(auth.verifyToken, auth.permitAdmin, Roles.update)
    .delete(auth.verifyToken, auth.permitAdmin, Roles.destroy);

export default role;