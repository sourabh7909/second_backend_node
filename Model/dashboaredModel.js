const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    Name:String,
    Images:String,
    Specialization :String,
    Experience:Number,
    Location:String,
    Date:String,
    Slots:Number,
    Fee:Number
},{
    versionKey:false
})

const DashboredModel=mongoose.model("appointments",userSchema)

module.exports={DashboredModel}