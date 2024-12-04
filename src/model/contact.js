import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  first_name: {
    required: true,
    type: String,
  },
  last_name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  service: {
    required: true,
    type: String,
  },
  message: {
    required: true,
    type: String,
  },
});

export const Contact =
  mongoose.models.Contact ?? mongoose.model("Contact", contactSchema);
