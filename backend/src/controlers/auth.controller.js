const userModel=require("../models/users.model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const registerUser=async(req,res)=>{
    const {username,email,password,recentPromts}=req.body;

    if(!username || !email || !password){
        return res.status(400).json({error:"All fields are required"});
    }

    try{
        const doUserExist=await userModel.findOne({email});
        if(doUserExist){
            return res.status(400).json({error:"User already exists"});
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const newUser=await userModel.create({
            username,
            email,
            password:hashedPassword,
            recentPromts
        });

        const token=jwt.sign({id:newUser._id},process.env.SECRET_KEY,{expiresIn:"1d"});
        res.cookie("Ai_token",token);
        res.status(201).json({message:"User registered successfully",
            user:{id:newUser._id,username:newUser.username,email:newUser.email}
        });

   }catch(err){
        res.status(500).json({error:"Internal server error"});
    }
}


const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({error:"All fields are required"});
    }

    try{
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(400).json({error:"Invalid credentials"});
        }

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({error:"Invalid credentials"});
        }

        const token=jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:"1d"});
        res.cookie("Ai_token",token);
        res.status(200).json({message:"User logged in successfully",
            user:{id:user._id,username:user.username,email:user.email}
        });

    }catch(err){
        res.status(500).json({error:"Internal server error"});
    }
}

const logoutUser=(req,res)=>{
    res.clearCookie("Ai_token");
    res.status(200).json({message:"User logged out successfully"});
}


module.exports={registerUser,loginUser,logoutUser};