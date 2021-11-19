const dotenv = require('dotenv');
dotenv.config({path:'../.env'});

module.exports = {
    secretKey : process.env.JWT_SECRET,
    option : {
        algorithm : "HS256", // 해싱 알고리즘
        expiresIn : "7d",  // 토큰 유효 기간
        issuer : "COURSE_REGISTER_ADMIN" // 발행자
    }
}