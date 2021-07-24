

const User = require('../models/User')
const {
  Admin,
  superAdmin,
  Coach,
  Member
} = require('../models/Role')
const isAdmin = function (req, res, next) {
  const user = User.findById(req.params.id)
  if (user.role === Admin)
    return next ();
}




const isSuperAdmin = function (req, res, next) {
  if (User.role ===  superAdmin)
    return next (); 
}

const isMember = function (req, res, next) {
  if (User.role ===  Member)
    return next ();
}

const isCoach = function (req, res, next) {
  if (User.role ===  Coach)
    return next ();  
}

module.exports = {
  isAdmin,
  isCoach,
  isSuperAdmin,
  isMember}
 


