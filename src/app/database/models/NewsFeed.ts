import mongoose from "mongoose";


const newsFeedSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      
    },
    subtitle: {
        type: String,
        required: true,
        
    },
    coverImage: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
           
    },
    publishedAt: {
        type: Date,
        required: true,
        index: true
       
    }
})

export const NewsFeed = mongoose.models.NewsFeed || mongoose.model("NewsFeed", newsFeedSchema);