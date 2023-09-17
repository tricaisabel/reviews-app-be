import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    }],
    image: {
        type: String,
        default: true
    }
})

const Company = mongoose.model('Company',companySchema) 
export default Company;
