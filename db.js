
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:"./config.env"})
const mongooseURI = process.env.DB_URI || 'mongodb+srv://manishiitguwahati37:Manish@cluster0.ivtehwg.mongodb.net/';
//console.log(mongooseURI)



const connectToMongo=()=>{
    mongoose.connect(mongooseURI,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
    )

    .then((data)=>{
        console.log(`Mongo db connected successfully on ${data.connection.host}`)
    })

    .catch((err)=>{
        console.log("mongodb connection failed")
    })
}

module.exports=connectToMongo