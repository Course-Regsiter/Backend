const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretKey').secretKey;
const options = require('../config/secretKey').options;

module.exports = {
    sign: async (payload) => {
        const result = {
            access_token : jwt.sign(payload, secretKey, options)
        }

        return result
    },
    verify: async(token) => {
        let decoded;
        try {
            decoded = jwt.verify(token, secretKey);
            return decoded;
        } catch (err) {
            return err;
            // if (err.message === 'jwt expired') {
            //     console.log('expired token');
            //     return TOKEN_EXPIRED;
            // } else if (err.message === 'invalid token') {
            //     console.log('invalid token');
            //     console.log(TOKEN_INVALID);
            //     return TOKEN_INVALID;
            // } else {
            //     console.log("invalid token");
            //     return TOKEN_INVALID;
            // }
        }
    }
}