const userSceham = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registeruser = async(req,res)=>{
    try{
       let {name,email,password} = req.body

        const userexist = await userSceham.findOne({email})
        if(userexist){
            res.status(404).json({message:"User Alredy exist pease login"})
        }
        const haspassword  = await bcrypt.hash(password,10)

        const newuser = await userSceham.create({
            name,
            email,
            password:haspassword,
        })
         
        res.status(201).json({
      message: "User created successfully",
      user: {
        id: newuser._id,
        name: newuser.name,
        email: newuser.email,
        resume: newuser.resume,
      },
    });
          
    }catch(error){
          res.status(500).json({
      message: "User not created",
      error: error.message,
    });
    }
}

const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userSceham.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        resume: user.resume,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

module.exports = {registeruser,loginuser}