import mongoose from 'mongoose'
import { passwordRegex, phoneNumberRegex } from '@/app/helpers';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: false,
    default: null
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(value);
      },
      message: () => "Email is invalid.",
    },
  },
  phoneNumber: {
    type: Number,
    required: false,
    validate: {
      validator: function (value: Number | null) {
        if(value) {
          return phoneNumberRegex.test(value.toString());
        } 
        return true
      },
      message: () => "Phone number format is incorrect.",
    },
    default: null
  },
  password: {
    type: String,
    required: false,
    default: null,
    validate: {
      validator: function (value: string) {
        if(value) {
          return passwordRegex.test(value)
        }
        return true
      },
      message: () =>
        "Password should contain atleast one uppercase character, one lowercase character, one special character.",
    },
    minLength: [8, "Password should be 8 characters long."],
  },
  role: {
    type: String,
    required: true,
  },
  isEmailVerified: {
    type: Boolean,
    required: false,
    default: false
  }
});

userSchema.methods.getDetails = function () {
  return {
    _id: this._id,
    fullName: this.fullName,
    email: this.email,
    phoneNumber: this.phoneNumber,
    isEmailVerified: this.isEmailVerified,
    role: this.role
  }
}


export const User = mongoose.models.User || mongoose.model("User", userSchema);


