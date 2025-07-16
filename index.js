 const mongoose=require("mongoose");

getConnect()
.then((res)=>{
    console.log("sucessfully connected",res);
})
.catch((err)=>
{
    console.log("error",err);
})

async function getConnect()
{
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}



const userSchema=mongoose.Schema({
  name:String,
  branch:String,
  email:String,
  age:Number
})

const user=mongoose.model("user",userSchema);
/*
const data=new user({
    name:"soumya",
    branch:"mca",
    email:"soumya@google.com",
    age:24
});

 user.insertMany([
    {
        name:"saroj",
        branch:"b.tech",
        email:"saroj001@gmail.com",
        age:29
    },
    {
         name:"Raju",
         branch:"Mca",
         email:"raju@yahoo.com",
         age:25

    },
    {
        name:"Roman",
         branch:"Mca",
         email:"roman123@yahoo.com",
         age:26
    }

 ])

 

data.save()
.then((res)=>
{
    console.log(res);
})
.catch((err)=>
{
    console.log(err);
})
*/

/*


user.findById("6873f928e7d8b43bf0f9e517")
.then((data)=>
{
    console.log(data);
})
.catch((err)=>
{
    console.log(err);
})
    */



/*
user.findByIdAndUpdate('6873f928e7d8b43bf0f9e515',{age:25},{new:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err)
});
*/


user.findByIdAndDelete('6873f928e7d8b43bf0f9e516')
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
