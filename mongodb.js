//CRUD operations
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient  //to connect to database and establish a connection
const ObjectID=mongodb.ObjectID

//const {Mongoclient,ObjectID}=require('mongodb')   //destructuring example

const connectionURL ='mongodb://127.0.0.1:27017'  //use ip instead of localhost so that there wont be much delay
const databaseName ='task-manager'
 
const id=new ObjectID()
console.log(id, id.getTimestamp())

MongoClient.connect(connectionURL,{useUnifiedTopology : true}, (error, client)=>{ //useUnifiedTopology or useNewUrlParser
    if(error){
        return console.log("unable to connect to database")
    }

    console.log("connection is fine")
    const db=client.db(databaseName)

    db.collection('users').deleteMany({age:23}).then((result)=>{
        console.log(result)
    }).catch(error)
    {
        console.log(error)
    }

    // const updatePromise=db.collection('users').updateOne({_id:new ObjectID("5f15e43293a8481340b38f3b")},
    // {$set:{name:'Amit',age:27}}
    // )

    // updatePromise.then((result)=>{               //resolve and reject are two objects which  comes back in promises
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').findOne({name:'Kesava'},(error,result)=>{
    //     if(error){
    //         return console.log('unable to fetch')
    //     }

    //     console.log(result)
    // })

    // db.collection('users').find({age:23}).toArray((error,users)=>{ //find always returns a cursor and can use any method like count or toArray
    //     if(error){
    //         return console.log('unable to fetch')
    //     }

    //     console.log(users)
    // })


    // db.collection('users').insertOne({ // users is the collection name we can give any thing 
    //     name: 'Kesava',
    //     age: 23
    // },(error, result)=>{
    //     if(error){
    //         return console.log('error in inserting')

    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'bunny',
    //         age:23
    //     },    
    //     {
    //         name:'ov',
    //         age:24
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('error in inserting')

    //     }
    //     console.log(result.ops)
         
    // })
})
