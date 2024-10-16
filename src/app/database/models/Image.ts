import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    mimeType: {
        type: String,
        required: true
    },
})

export const Image = mongoose.models.Image || mongoose.model("Image", imageSchema);