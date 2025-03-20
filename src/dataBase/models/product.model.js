import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name: { 
        type: String,
        required: true 
    },
    description: {
        type: String 
    },
    price: { 
        type: Number,
        required: true 
    },
    stock: { 
        type: Number,
        required: true,
        default: 0 
    },
    category: {
        type: Schema.Types.ObjectId, 
        ref: "Category" 
    },
    sold: { 
        type: Number, 
        default: 0 
    },
},{
    timestamps:true,
    versionKey:false
})

export const Product = model('Product', productSchema)