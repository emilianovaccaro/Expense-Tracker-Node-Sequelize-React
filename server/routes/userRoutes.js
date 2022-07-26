const { Router } = require('express');
const { check } = require('express-validator');
const { validateRole } = require('../middlewares/validateRole');
const { postUser, deleteUser, getUsers } = require('../controllers/userController');

const userRoutes = Router();


userRoutes.post('/', postUser );
userRoutes.delete('/:id', deleteUser );

userRoutes.get(
  '/admin', 
  [ validateRole ],
  getUsers
);


module.exports = {
  userRoutes
};