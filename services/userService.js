const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const settings = require('../config/settings');

const { User } = require('../models');

const getUser = user => {
    return User.findOne({
        where: user,
        raw: true
    });
}

const authenticate = params => {
    return getUser({ 
        username: params.username 
    }).then(user => {
        if (!user) {
            throw new Error('Invalid credentials');
        }
        
        if (!bcrypt.compareSync(params.password || '', user.password)) {
            throw new Error('Invalid credentials');
        } 
        else {
            // Générer le token
            const payload = {
                id: user.id,
                name: user.username,
                admin: user.isAdmin
            };
            return {
                token: jwt.sign(payload, settings.jwtSecret, {
                    algorithm: settings.jwtAlgo,
                    expiresIn: settings.ttl
                }),
                isAdmin: user.isAdmin
            };
        }
    }).catch(err => {
        throw err;
    });
}

module.exports = {
    getUser,
    authenticate
}