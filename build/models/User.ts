import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs'

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

UserSchema.pre('save',async function(){
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function() {
  console.log(this)
}
 
export default mongoose.model("User", UserSchema);
