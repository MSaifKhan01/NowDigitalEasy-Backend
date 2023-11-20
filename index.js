const express=require("express")

const cors=require("cors")
const dotenv=require("dotenv")


const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");


const { Connection } = require("./Config/db")
const { UserRouter } = require("./Routes/user.routes")

const app=express()

app.use(cors())// Enabling CORS
app.use(express.json())// Parsing incoming JSON requests
dotenv.config()// Loading environment variables from .env file



// --------->>>>>> Swagger <<<<<<---------\\

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'NowDigitalEasy-Backend',
        version: '1.0.0',
        description:"This project is a Node.js application for managing users"
      },
      servers: [
        {
          url: "http://localhost:5038",
        },
      ],
      
    },
    apis: ["./ApiDocs/RoutesDoc.js"]
  };
  
  const openapiSpecification = swaggerJsDoc(options);
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(openapiSpecification));



app.get("/",(req,res)=>{
    res.status(200).send("welcome to Home Page ")
})

app.use("/user",UserRouter)








// Server Connection 
app.listen(process.env.port,async()=>{

    try {
        await Connection
        console.log("connected DB")

    } catch (error) {
        console.log(err)
    }
    console.log("connected")
})