import mongoose from "mongoose";
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    Date: Date,
    id: String,
    Userrr: String,
    Age: Number,
    Country: String
});

const Data = mongoose.model('Dataa', dataSchema);


// export the model
export default Data;