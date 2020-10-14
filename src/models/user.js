
const mongoose = require('mongoose')
const validator = require('validator')
// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology: true
// })


const User= mongoose.model('User',{
    name: {
        type:String,
        required:true,
        trim:true
    }, //object
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength: 7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password should not contain the string password in it')
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age cannot be negative')
            }
        }
    }

})

module.exports=User

