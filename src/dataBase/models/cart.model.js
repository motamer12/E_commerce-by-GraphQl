import { model, Schema } from "mongoose";


const cartSchema =new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
},{
    timestamps:true,
    versionKey:false
})


export const Cart = model("Cart" ,cartSchema)