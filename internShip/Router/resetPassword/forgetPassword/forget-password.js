const router = require('express').Router();
const User = require('../../../models/User');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.put('/forgot-password', (req, res) => {
    const {email} =req.body;
    User.findOne({email}), (err, user) => {
        if(err || !user) {
            return res.status(400).json({error: "User with this email does not exists"});      }
    }
    const token = jwt.sign({_id: user._id}, process.env.RESET_PASSWORD_KEY, {expiresIn: '20m'});
    const data = {
        from:'marwa.hmaoui910@gmail.com',
        to: email,
        subject: 'Account Activate Link',
        html: `
        <h2>Please click on given link to reset your password</h2>
        <p>${process.env.CLIENT_URL}/reset password/${token}</p>
      `    
    };

    return user.updateOne({resetLink: token}, (err, success) => {
        if(err) {
            return res.status(400).json({error: "reset password link error"});      
        } else {
            mg.message().send(data, function(error, body){
                if(error){
                    return res.json({
                        error: err.message
                    })
                }
                return res.json({message: "Email has been sent, kindly follow the instructions"});
            });
        } 
    })
})
module.exports = router; 
