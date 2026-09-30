SETUP FIRST NODE JS AND EXPRESS JS

package.json file config

npm init

for installin all packages within one command

npm i express mongoose dotenv bcryptjs jsonwebtoken multer cors nodemon

index.js

its server file and starting point for the APIS

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

SETUP MONGODB DATABASE AND CONNECTED THE NODE JS APPLICATION USING MONGOOSE LIBRABRY

USED THE MONGODB ATLAS "connection string over here"

[nodemon] restarting due to changes...
[nodemon] starting node index.js
◇ injected env (2) from .env
🚀 Server running on port 5000
MongoDB Connected: ac-cmgsmnu-shard-00-00.jk92x6k.mongodb.net

SETUPING THE ENV VARIABLES FOR THE BEBST PRACTICE

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

SETUPING TE MODEL FILES ACCRODING TO NEED

WE NEED THREE FILES USER , JOB, AND APPLICATION

model/
├── User.js
├── Job.js
└── Application.js

DEFINE THE RRALTION

┌──────────────────┐
│ USER             │
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
         │ Many
┌────────▼─────────┐
│ APPLICATION      │
│──────────────────│
│ _id              │
│ user ────────────┼──► User._id
│ job ─────────────┼──► Job._id
│ status            │
│ appliedAt         │
└────────┬─────────┘
         │
         │ Many
         │
         │ 1
┌────────▼─────────┐
│ JOB              │
│──────────────────│
│ _id              │
│ title            │
│ company          │
│ location         │
│ description      │
│ requirements     │
└──────────────────┘

SETUP CONTROLLER --> FOR EXCRUTING THE DIFFRENT BUSSNIENS LOHICS LIKE OUR APP LOGIC

controllers/
├── authController.js
├── jobController.js
├── applicationController.js
└── resumeController.js

SETUP THE SEED FILE AND STORED SOME JOBS IN MONODB



IMPLMENTED THE AUTH MIDDLWARE FOR AUTHNTICARTE AND AUOTHORIZE THE USER USING TOKEN

--> this actual core logic of this task becuse over here we were prvent unauthorized acess

const token = req.headers.authorization?.split(" ")[1];

jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  if (err) {
    console.log("JWT ERROR:", err.message);
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }

  console.log("DECODED:", decoded);

  req.UserId = decoded.userId;

  console.log("USER ID:", req.UserId);

  next();
});

MONGODB DATBASE COLLECTION SCRRENSHOTS

APPLICATION COLLECTION

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/fd4d7b40-a8f2-42bd-9072-87791d43a3aa" />

JOB COLLEION
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/4d52af08-e3c1-43f7-810c-6f94891f5fe0" />



USER COLLECTION
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/c78f65d5-027e-4eff-b899-ef7b9fc029f4" />



LIVE RENDER API TESTING DCOUMAION WITH JSON RESPONCE AND ENDPOINT

AUTH API

1. REGISTER API

https://potenz-jop-task.onrender.com/api/register

BODY

{
  "name": "rahul dave",
  "email": "raul@test.com",
  "password": "12345678"
}

RESPONCE

{
  "message": "User created successfully",
  "user": {
    "id": "6abbf4592403f3c7079086e2",
    "name": "rahul dave",
    "email": "raul@test.com",
  }
}

2. LOGIN API

https://potenz-jop-task.onrender.com/api/login

BODY

{
  "email": "raul@test.com",
  "password": "12345678"
}

RESPONCE

{
  "message": "Login successful",
  "token": <JWT_TOKEN>
  "user": {
    "id": "6abbf4592403f3c7079086e2",
    "name": "rahul dave",
    "email": "raul@test.com",
    "resume": null
  }
}

JOBS API

3.GET ALL JOBS API

https://potenz-jop-task.onrender.com/job

RESPONCE

{
  "message": "Jobs fetched successfully",
  "count": 3,
  "jobs": [
    {
      "_id": "6abbc0c180067c8552e6645c",
      "title": "Backend Developer",
      "company": "CodeCraft Technologies",
      "location": "Bangalore",
      "description": "Join our backend team to develop secure and scalable server-side applications.",
      "requirements": [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "API Development"
      ],
      "__v": 0,
      "createdAt": "2026-09-29T13:44:33.099Z",
      "updatedAt": "2026-09-29T13:44:33.099Z"
    },
    {
      "_id": "6abbc0c180067c8552e6645b",
      "title": "MERN Stack Developer",
      "company": "Digital Innovations",
      "location": "Remote",
      "description": "Looking for a MERN Stack developer to develop scalable web applications.",
      "requirements": [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git"
      ],
      "__v": 0,
      "createdAt": "2026-09-29T13:44:33.099Z",
      "updatedAt": "2026-09-29T13:44:33.099Z"
    },
    {
      "_id": "6abbc0c180067c8552e6645a",
      "title": "Node.js Developer",
      "company": "Tech Solutions Pvt Ltd",
      "location": "Ahmedabad, Gujarat",
      "description": "We are looking for a Node.js developer to build and maintain RESTful APIs.",
      "requirements": [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "JavaScript"
      ],
      "__v": 0,
      "createdAt": "2026-09-29T13:44:33.097Z",
      "updatedAt": "2026-09-29T13:44:33.097Z"
    }
  ]
}

3.GET SINGLE JOB

https://potenz-jop-task.onrender.com/job/6abbc0c180067c8552e6645a

RESPONCE

{
  "message": "Job fetched successfully",
  "job": {
    "_id": "6abbc0c180067c8552e6645a",
    "title": "Node.js Developer",
    "company": "Tech Solutions Pvt Ltd",
    "location": "Ahmedabad, Gujarat",
    "description": "We are looking for a Node.js developer to build and maintain RESTful APIs.",
    "requirements": [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JavaScript"
    ],
    "__v": 0,
    "createdAt": "2026-09-29T13:44:33.097Z",
    "updatedAt": "2026-09-29T13:44:33.097Z"
  }
}

RESUME API

4. UPLOAD RESUME

https://potenz-jop-task.onrender.com/resume

BODY

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/8959921e-5bad-4aab-812b-6b9913739594" />

Authorization

Bearer Token <JWT_TOKEN>

RESPONCE

{
  "message": "Resume uploaded successfully",
  "resume": "disk/1790745483106-software_developer_resume.pdf"
}

APPLICATION API

5. APPLY APPLICATION API

https://potenz-jop-task.onrender.com/app/6abbc0c180067c8552e6645c

Authorization

Bearer Token <JWT_TOKEN>

RESPONCE

{
  "message": "Job applied successfully",
  "application": {
    "user": "6abbf4592403f3c7079086e2",
    "job": "6abbc0c180067c8552e6645c",
    "status": "Applied",
    "_id": "6abc9fbd94d69b979599d53d",
    "appliedAt": "2026-09-30T05:35:57.105Z",
    "createdAt": "2026-09-30T05:35:57.105Z",
    "updatedAt": "2026-09-30T05:35:57.105Z",
    "__v": 0
  }
}

6. GET MY APPLCATION

https://potenz-jop-task.onrender.com/app/me

Authorization

Bearer Token <JWT_TOKEN>

RESPONCE

{
  "applications": [
    {
      "_id": "6abc9fbd94d69b979599d53d",
      "user": "6abbf4592403f3c7079086e2",
      "job": {
        "_id": "6abbc0c180067c8552e6645c",
        "title": "Backend Developer",
        "company": "CodeCraft Technologies",
        "location": "Bangalore"
      },
      "status": "Applied",
      "appliedAt": "2026-09-30T05:35:57.105Z",
      "createdAt": "2026-09-30T05:35:57.105Z",
      "updatedAt": "2026-09-30T05:35:57.105Z",
      "__v": 0
    }
  ]
}
