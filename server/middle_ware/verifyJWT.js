const jwt = require('jsonwebtoken')
const verifyJWT = (req, res, next) => {

    const authHeader = req.headers.authHeader || req.headers.AuthHeader
    if (!authHeader?.startsWith('Bearer ')) {
         return res.status(401).send('error in verify')
    }
    const token=authHeader.split(' ')[1]
    //check if the token correct:
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{if(err)
        return res.status(401).send('error in verify')
req.user=decoded
next()
    })
}
module.exports = verifyJWT