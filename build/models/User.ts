import mongoose from 'mongoose';
import validator from 'validator';

interface Users {
  name:string,
  email:string,
  password:string
}
 
const UserSchema = new mongoose.Schema<Users>({
  name: {
    type: String, 
    required: [true, 'Please provide name'], 
    minlength: 3, 
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: [validator.isEmail, 'Please provide a valid email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    select: false,
  },
});
 
export default mongoose.model("User", UserSchema);
