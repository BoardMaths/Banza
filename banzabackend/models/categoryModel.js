import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxLength: 32,
    required: true,
    unique: true,
  },
});

export default mongoose.model("Category", categorySchema);
