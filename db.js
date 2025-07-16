const mongoose=require("mongoose");




mongoose.connect("mongodb://127.0.0.1:27017/amazonBook")
.then((res)=>
{
    console.log(" Sucessfully connected");
})
.catch((err)=>{
    console.log(err);
})


const bookSchema=mongoose.Schema({
 
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String
    },
    price:{
        type:Number
    }

})


const book=mongoose.model("book",bookSchema);

const user=new book({
    title:"Hear",
    author:"Tm christ belt",
    price:1230

})

user.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})