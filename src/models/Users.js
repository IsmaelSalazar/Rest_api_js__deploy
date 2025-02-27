import { Schema, model } from "mongoose";
const uniqueValidator = require("mongoose-unique-validator");

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      default: true,
      trim: true,
    },
    type: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);
clientsSchema.plugin(uniqueValidator);

export default model("Users", usersSchema);
