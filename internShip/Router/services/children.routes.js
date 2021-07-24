const express = require('express');
const router = express.Router();
const Child = require('../../models/Child');
var bodyParser = require('body-parser');
const verify = require('../../middleware/verify.token')
const checkRole = require('../../middleware/verify.role');




var functions = {
  getChild: async function (req, res) {
    try {
      var child = await Child.find({})
      res.send(child);
    }

    catch (err) {
      res.status(500).send();
    }
  },

  getChildById: async function (req, res, next) {
    Child.findById(req.params.id)
    .then((child) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');    
        res.json(child);
    }, (err) => next(err))
    .catch((err) => next(err));
  },

  getChildByName: async function (req, res, next) {
    Child.findOne(
      {
        username: req.params.username
      },
      (err , child) =>{ 
        if(err){
          res.send('failed to get child')
          console.log('get err:', err)
        }
        else {
          console.log(child);
          res.send(child)
        }
      } 
      
    )
    
  },

  addChild: async function (req, res) {
    const child = new Child({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      imgUrl: req.body.imgUrl,
      parent: req.body.parent,
      

    });

    try {
      const savedChild = await child.save();
      console.log('here')

      console.log(savedChild)
      res.send(savedChild);
    }

    catch (err) {
      res.status(500).send();
    }
  },

  putChild: async function (req, res, next) {
    Child.findOneAndUpdate(
      
        {firstName: req.params.firstName},
      
      { $set: {firstName: req.body.firstName,
              lastName: req.body.lastName,
              dateOfBirth: req.body.dateOfBirth,
              imgUrl: req.body.imgUrl,
              },},
      
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          console.log("Child was updated !!");
          console
          res.send(req.body);
        }
      }
    );
    
  },

  updateChild: async function (req, res, next) {
    Child.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          console.log("Child was updated !!");
          console.log(req.body)
          res.send(req.body);
        }
      }
    );
  },

  deleteChild: async function (req, res) {
    Child.findByIdAndRemove(req.params.id, (err) => {
    if (!err) {
      res.send('Child Removed');
      }
    else { console.log('Failed to Delete child Details: ' + err); }
      });
  },


 

  deleteUserByName: async function (req, res) {
    child.findOneAndDelete(
      {
        firstName: req.params.firstName
      },
     
      (err, result)=>{
        if(err) {return res.status(500).json({msg:err});}
        
        
        const msg  ={
          msg: "child deleted",
        
          username: req.params.username,
        };
        console.log('child deleted');
        return res.json(msg);
       
        
      }
      
    );
    
  }
  


  

}

module.exports = functions;
