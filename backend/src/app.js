const express=require('express');
const db=require("./db/mongo.db");
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const aiRoutes=require("./routes/ai.routes");
const userRoutes=require("./routes/user.routes");

app.use("/ai",aiRoutes);
app.use("/api/user",userRoutes);



module.exports=app;