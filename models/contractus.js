import mongoose from "mongoose";

const contractusSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  whatsappNumber: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  interest: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
});

export const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contractusSchema);
