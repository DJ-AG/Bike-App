import mongoose from "mongoose";
import validator from 'validator'

export interface User {
  username: String;
  email: string | boolean;
  password: String;
//   location:String;
}

const UserSchema = new mongoose.Schema<User>({
  username: {
    type:String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type:String,
    required: [true, "Please provide email"],
    validate:validator.isEmail, message:'Please provide valid email',
    unique: true,
  },
  password: {
    type:String,
    required: [true, "Please provide password"],
    minlength: 3,
  },
// implementation for future
//   location: {
//     maxlength: 20,
//     trim: true,
//   },
});


export default mongoose.model('User', UserSchema)