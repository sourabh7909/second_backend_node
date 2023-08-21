const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://sourabhpatidar:sourabhpatidar@cluster0.sgljm1o.mongodb.net/rootba?retryWrites=true&w=majority")

module.exports={connection}