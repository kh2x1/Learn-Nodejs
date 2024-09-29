import mongoose from "mongoose";
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    Userrr: String
});

const Data = mongoose.model('Dataa', dataSchema);


// export the model
export default Data;