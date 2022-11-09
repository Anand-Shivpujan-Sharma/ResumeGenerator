import mongoose, { mongo } from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
});

export default mongoose.model("Contact", ContactSchema);