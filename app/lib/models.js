import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    unique: true,
  },
  password:{
    type: String,
    require: true,
  },
  emailId:{
    type: String,
  },
  img:{
    type: String,
  },
  isAdmin:{
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  phone:{
    type: String,
  },
  address:{
    type: String
  },
  
},{timestamps: true});

const productSchema = new mongoose.Schema({
    title: {
      type: String,
      require: true,
      unique: true,
    },
    desc:{
      type: String,
      require: true,
    },
    price:{
      type: Number,
      require: true,
      min: 0
    },
   img:{
      type: String,
    },
    color:{
        type: String,
    },
    address:{
      type: String
    },
    size:{
        type: String,
    }
  }, {timestamps: true});

  export const User = mongoose.models.User || mongoose.model("User" , userSchema);
  export const Product = mongoose.models.Product || mongoose.model("Product" , productSchema);

  
