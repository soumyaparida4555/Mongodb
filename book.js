const mongoose=require("mongoose");


aBook().then((res)=>{
    console.log("Sucessfully connected");
})
.catch((err)=>{
    console.log(err);
});


async function aBook()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/Book");
}


const bookSchemas=mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:20
    },
    
    author:{
        type:String,

    },
    price:{
        type:Number,
        min:[1,"not matching with constraint type"],
        default:1
    },
    comics:{
        type:String,
        enum:["Marvel","Dc","Horror commics"]
    }


})


const book= mongoose.model("book",bookSchemas);
/*
const book1=new book({
    title:"Spider man",
    author:"Stan lee",
    price:-1000,
    comics:"Marvel"
})

book1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
})
    */

book.findOneAndUpdate({title:"Spider man"} ,{price:-3000},{runValidators:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
})
