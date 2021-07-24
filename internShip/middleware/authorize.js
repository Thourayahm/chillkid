const  {
    isAdmin,
    isCoach,
    isSuperAdmin,
    } = require("./permission")
const authorizeAdmin = function (req, res ,next) {
    if(!isAdmin (req.user)){
        res.status(401);
        return res.send('Not allowed')
    }
    next()
}

const authorizeSuperAdmin = function (req, res ,next) {
    if(!isSuperAdmin (req.user)){
        res.status(401);
        return res.send('Not allowed')
    }
    next()
}

const authorizeCoach = function (req, res ,next) {
    if(!isCoach (req.user)){
        res.status(401);
        return res.send('Not allowed')
    }
    next()
}


module.exports = {
    authorizeAdmin,
    authorizeCoach,
    authorizeSuperAdmin,
    }
   