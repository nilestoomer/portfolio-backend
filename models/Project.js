import mongoose from "mongoose";

const Schema = mongoose.Schema

let ProjectSchema = new Schema({
    "title": { type: String},
        "description": { type: String},
        "github": { type: String},
        "languages": { type: String},
        "frameworks": { type: String}
})

export default mongoose.model("projects", ProjectSchema)