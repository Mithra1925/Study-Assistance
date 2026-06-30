const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db");

dotenv.config();
console.log(process.env.MONGO_URI);
connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname,"public","index.html"));

});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{

    console.log(`🚀 Server Running on http://localhost:${PORT}`);

});