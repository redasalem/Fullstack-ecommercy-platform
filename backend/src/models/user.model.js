import mongooes from "mongoose";

const addressSchema = new mongooes.Schema({
    label:{
        type:String,
        required:true,
    },
    fullName:{
        type:String,
        required:true,
    },
    streetAddress:{
         type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    zipCode:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    isDefault:{
        type:Boolean,
        default:false,
    },




});


const userSchema = new mongooes.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    imageUrl:{
          type:String,
          default:"",
    },
    clerkId:{
        type:String,
        uniqe:true,
        required:true
    },
    addresses:[addressSchema],
    wishlist:[
        {
            type:mongooes.Schema.Types.ObjectId,
            ref:"Product",
        }
    ],

    


},

{timestamps:true}

);

export const user = mongooes.model("User",userSchema);