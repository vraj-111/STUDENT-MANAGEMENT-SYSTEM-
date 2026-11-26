import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gr_id: {
    type: Number,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
    enum: ["Full Stack", "Graphic Design ", "UI/UX"],
  },
});

const studentModel = mongoose.model("Student Model", studentSchema);

export default studentModel;