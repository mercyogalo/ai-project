import mongoose from "mongoose";


const searchSchema = new mongoose.Schema(
{
   question:{type: String}
}
);

const Search=mongoose.model('Search', searchSchema)
module.exports = Search;