## SETUP FIRST NODE JS AND EXPRESS JS 


## package.json file config
npm init 


## for installin all packages within one command 
npm i express mongoose dotenv bcryptjs jsonwebtoken multer cors nodemon


## index.js : its server file and starting point for the APIS 

{
  "name": "job-task",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"nodemon index.js"
  },
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "cors": "^2.8.6",
    "dotenv": "^18.0.4",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.10.2",
    "multer": "^2.4.0",
    "nodemon": "^3.1.14"
  }
}


## SETUP MONGODB DATABASE AND CONNECTED THE NODE JS APPLICATION USING MONGOOSE LIBRABRY USED THE MONGODB ATLAS

mongodb+srv://jadavdeep560_db_user:pFYRtv2vTLDOEkQJ@jobtask.jk92x6k.mongodb.net/

[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
◇ injected env (2) from .env
🚀 Server running on port 5000
MongoDB Connected: ac-cmgsmnu-shard-00-00.jk92x6k.mongodb.net


## SETUPING THE ENV VARIABLES FOR THE BEBST PRACTICE 

PORT = 5000

MONGO_URI=mongodb+srv://jadavdeep560_db_user:pFYRtv2vTLDOEkQJ@jobtask.jk92x6k.mongodb.net/

JWT_SECRET=JOB-TASK

## SETUPING TE MODEL FILES ACCRODING TO NEED WE NEED THREE FILES USER , JOB, AND APPLICATION

models/
├── User.js
├── Job.js
└── Application.js


## DEFINE THE RRALTION 

                    ┌──────────────────┐
                    │      USER        │
                    │──────────────────│
                    │ _id              │
                    │ name             │
                    │ email            │
                    │ password         │
                    │ resume           │
                    └────────┬─────────┘
                             │
                             │ 1
                             │
                             │
                             │ Many
                    ┌────────▼─────────┐
                    │   APPLICATION    │
                    │──────────────────│
                    │ _id              │
                    │ user ────────────┼──► User._id
                    │ job ─────────────┼──► Job._id
                    │ status           │
                    │ appliedAt        │
                    └────────┬─────────┘
                             │
                             │ Many
                             │
                             │
                             │ 1
                    ┌────────▼─────────┐
                    │       JOB        │
                    │──────────────────│
                    │ _id              │
                    │ title            │
                    │ company          │
                    │ location         │
                    │ description      │
                    │ requirements     │
                    └──────────────────┘


## SETUP CONTROLLER 

--> FOR EXCRUTING THE DIFFRENT BUSSNIENS LOHICS LIKE OUR APP LOGIC

controllers/
├── authController.js
├── jobController.js
├── applicationController.js
└── resumeController.js

## SETUP THE SEED FILE AND STORED SOME JOBS IN MONODB

![alt text](image.png)

## IMPLMENTED THE AUTH MIDDLWARE FOR AUTHNTICARTE AND AUOTHORIZE THE USER USING TOKEN
--> this actual core logic of this task becuse over here we were prvent unauthorized acess 

const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(400).json({message:"Token not found"})
    }
    //here we verify the token using key 
    jwt.verify(token, process.env.JWT_SECRET,(decoded)=>{
      //and excute the authtication par and find out who the actual user is 
     req.user = decoded;
     next();


## MONGODB DATBASE COLLECTION SCRRENSHOTS 

## APPLICATION COLLECTION 
![alt text](image-1.png)

## JOB COLLEION 

![alt text](image-2.png)

## USER COLLECTION

![alt text](image-3.png)

## LIVE RENDER API TESTING DCOUMAION WITH JSON RESPONCE AND ENDPOINT