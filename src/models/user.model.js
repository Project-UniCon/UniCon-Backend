import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    enrollmentNumber: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    branch: {
      type: String,
      required: true,
      index: true,
    },
    startYear: {
      type: Number,
      required: true,
      length: 4,
    },
    currentSem: {
      type: Number,
      required: true,
    },
    userDetails: [
      {
        semester: {
          type: Number,
        },
        rollNo: {
          type: Number,
        },
        batch: {
          type: String,
          trim: true,
        },
      },
    ],
    isActivated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export const User = mongoose.model("User", userSchema);
