const bcryptjs = require('bcryptjs');
const { User } = require('../models/User');


//get user goes here. should be called something login...
//also need a google login function (or i could use passport)

const login = async ( req, res ) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      attributes: [ "id", "name", "email", "password", "role", "google" ],
      where: { email },
    });

    if( !user ){
      return res.status(400).json({
        msg: 'Wrong user/password'
      });
    }

    const isValidPassword = bcryptjs.compareSync( password, user.password );
    if ( !isValidPassword ) {
      return res.status(400).json({
        msg: 'Wrong User/Password'
      });
    }

    res.json(user);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


module.exports = {
  login
};