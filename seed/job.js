const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Job = require("../model/job");

dotenv.config();

const jobs = [
  {
    title: "Node.js Developer",
    company: "Tech Solutions Pvt Ltd",
    location: "Ahmedabad, Gujarat",
    description:
      "We are looking for a Node.js developer to build and maintain RESTful APIs.",
    requirements: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JavaScript",
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "Digital Innovations",
    location: "Remote",
    description:
      "Looking for a MERN Stack developer to develop scalable web applications.",
    requirements: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
    ],
  },
  {
    title: "Backend Developer",
    company: "CodeCraft Technologies",
    location: "Bangalore",
    description:
      "Join our backend team to develop secure and scalable server-side applications.",
    requirements: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "API Development",
    ],
  },
];

const seedJobs = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Job.deleteMany();

    await Job.insertMany(jobs);

    console.log("Sample jobs inserted successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding jobs:", error.message);
    process.exit(1);
  }
};

seedJobs();