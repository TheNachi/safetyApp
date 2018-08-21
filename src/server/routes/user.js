import express from 'express';
import Users from '../controllers/users';
import auth from '../middlewares/auth'

const user = express.Router();

user.route('/users')
    .post(auth.validateUserInput, Users.create)
    .get(auth.verifyToken, auth.permitAdmin, Users.list);

user.route('/users/:id')
    .get(Users.retrieve)
    .put(Users.update)
    .delete(Users.destroy);

user.route('/users/login')
    .post(Users.login);

user.route('/users/search')
    .get(Users.search);

user.route('/users/logout')
    .post(Users.logout)

export default user;