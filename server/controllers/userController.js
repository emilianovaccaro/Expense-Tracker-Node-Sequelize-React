const bcryptjs = require('bcryptjs');
const { User } = require('../models/User');

/* 

GET USERS IS JUST FOR ADMINS.

GET USER WILL BE IN AN AUTH FILE TO LOG IN.

*/

const getUsers = async ( req, res ) => {
  const user = req.user;
  try{
    const users = await User.findAll({
      attributes: [ "id", "name", "email", "google" ],
      order: [["id", "DESC"]],
    });

    res.json(users);
  }
  catch( err ) {
    return res.status(500).json({ message: error.message })
  }
}

const postUser = async ( req, res ) => {
  const { id, name, email, password, role, google } = req.body;
  const newUser = User.create({
    id,
    name,
    email,
    password,
    role,
    google
  });

    // Hash password
  const salt = bcryptjs.genSaltSync();
  newUser.password = bcryptjs.hashSync( password, salt );

  await newUser.save();    
  res.json({
    newUser
  });
}


//delete user
const deleteUser = async ( req, res ) => {
  const { id } = req.params;
  try{
    const user = await User.destroy({
      where: { id },
    });

    res.json({ user, msg: 'borrado' });

  } catch ( error ) {
    return res.status(500).json({ message: error.message })
  }
}



module.exports = {
  postUser,
  deleteUser,
  getUsers
}