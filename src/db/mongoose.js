const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
})


// // const User= mongoose.model('User',{
// //     name: {
// //         type:String
// //     }, //object
// //     age:{
// //         type:Number
// //     }

// // })

// // const me= new User({name:'Keshav',age:23})

// // me.save().then(()=>{
// //     console.log(me)
// // }).catch((error)=>{
// //     console.log(error)
// // })


// const Task=mongoose.model('Task',{
//     description:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }
// })

// const task = new Task({
//     description:'My Task to do'
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })



