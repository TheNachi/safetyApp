import express from 'express';
import Users from '../controllers/users';
import auth from '../middlewares/auth'

const user = express.Router();

user.route('/users')
    .post(auth.validateUserInput, Users.create)
    .get(auth.verifyToken, auth.permitAdmin, Users.list);

user.route('/users/:id')
    .get(auth.verifyToken, auth.permitSelfOrAdmin, Users.retrieve)
    .put(auth.verifyToken, Users.update)
    .delete(auth.verifyToken, auth.permitAdmin, Users.destroy);

user.route('/users/login')
    .post(auth.validateLoginInput, Users.login);

user.route('/users/search')
    .get(auth.verifyToken, auth.permitAdmin, Users.search);

user.route('/users/logout')
    .post(Users.logout)

export default user;