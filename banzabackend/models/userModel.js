import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//model created with the above schema
const User = mongoose.model("User", userSchema);

//by default moogoosewiil set this User to users and will look for users collection in mongodb
export default User;

/* {roles: {
    User: {
      type: Number,
      default: 2001,
    },
    Editor: Number,
    Admin: Number,
  },
  
  refreshToken: [String],}
  */
