const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/forgot-password", async (req, res) => {

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({
            message: "Email not found"
        });
    }

    res.json({
        message: "Email verified"
    });

});

module.exports = router;


const otp = Math.floor(

100000 + Math.random()*900000

).toString();


user.otp = otp;

user.otpExpiry = Date.now()+300000;

await user.save();


const transporter=require("../config/mailer");

await transporter.sendMail({

from:process.env.EMAIL_USER,

to:user.email,

subject:"Password Reset OTP",

text:`Your OTP is ${otp}. It expires in 5 minutes.`

});


router.post("/verify-otp",async(req,res)=>{

const{

email,

otp

}=req.body;

const user=

await User.findOne({

email

});

if(!user){

return res.status(404).json({

message:"User not found"

});

}

if(user.otp!==otp){

return res.status(400).json({

message:"Invalid OTP"

});

}

if(Date.now()>user.otpExpiry){

return res.status(400).json({

message:"OTP Expired"

});

}

res.json({

message:"OTP Verified"

});

});