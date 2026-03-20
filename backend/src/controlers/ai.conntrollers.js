const aiService=require("../services/ai.services");

const genRes=async(req,res)=>{
    const prompt=req.body.prompt;

    if(!prompt){
        return res.status(400).json({error:"Prompt is required"});
    }

    const response=await aiService.generateRes(prompt);
    res.send(response);
}

module.exports={genRes};