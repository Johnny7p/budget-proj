import { Schema, model, Document } from 'mongoose';

// Interface to describe a user for TypeScript
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  
}

// Schema definition for the user
const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Timestamps option adds createdAt and updatedAt fields
}, { timestamps: true });

// You can also add methods or statics here. For example:
userSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password; // Remove password from the result
  return user;
};

// Create the model from the schema and export it
const UserModel = model<IUser>('User', userSchema);

export default UserModel;
