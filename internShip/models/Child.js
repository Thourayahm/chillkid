const { boolean } = require('joi');
const mongoose = require('mongoose');
const Child = mongoose.model ( 'Child', new mongoose.Schema ({
    childName:{ 
        type: String,
        required: true
    },
    
  
    bdateOfBirth: {
        type: String,
        
    },

   
    
    
    

    parent:{
        type: String
    },
    state:{
        type: Boolean,
        default: false
    },

   
}))

module.exports = Child;