import mongoose from "mongoose";

const todoSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    descr :{
        type:String,
        required:true
    },
    status : {
        type:String,
        required:false,
        enum:["pending","completed"],
        default:"pending",
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required : false,
    }
})


const Todo=mongoose.model("Todo",todoSchema);

export default Todo;