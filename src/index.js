const express =require('express')
require('./db/mongoose')
const User= require('./models/user')
const Task=require('./models/task')

const app= express()
const port= process.env.PORT ||3000

app.use(express.json())

app.post('/users',(req,res)=>{ //here we used post to post the data in http
    // console.log(req.body)
    // res.send('Testing')

    const user= new User(req.body) //-- we already added the body in the postman application with email id and password
    
    user.save().then(()=>{
        res.send(user)
    }).catch((error)=>{
        res.status(400).send(error)
        res.send(error)
    })
})

app.get('/users',(req,res)=>{
    User.find({}).then((users)=>{
        res.send(users)
    }).catch ((e)=>{
        res.status(500).send(error)
        console.log(e)
    })
})

app.post('/tasks',(req,res)=>{
    const task = new Task(req.body)

    task.save().then(()=>{
        res.send(task)
    }).catch((error)=>{
        res.status(400)
        res.send(error)
    })
})

app.listen(port,()=>{
    console.log('Server is upon port '+port)

})
