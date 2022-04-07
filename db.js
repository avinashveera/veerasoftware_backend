const mongoose=require('mongoose');

const URI="mongodb+srv://veerasoftware:urbanreach@cluster0.6haor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
console.log("hiii")

mongoose.connect(URI).then((result) => {
    console.log('database connect successfuly')
        
    }).catch((err) => {
        console.log(err)
        
    });


const schema=({
    name:String,
    comment:String
})

const usercomment=mongoose.model('feedback',schema)


module.exports=usercomment;