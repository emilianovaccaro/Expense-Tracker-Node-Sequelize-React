const { response } = require('express')

const validateRole = ( req, res = response, next ) => {

    if ( !req.user ) {
        return res.status(500).json({
            msg: "User is not logged in"
        });
    }

    const { role, name } = req.user;
    
    if ( role !== 'ADMIN' ) {
        return res.status(401).json({
            msg: `${ name } is not an Admin`
        });
    }

    next();
}


module.exports = {
    validateRole
}