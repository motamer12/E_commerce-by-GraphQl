import { model, Schema } from "mongoose";


const orderSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
      },
    ],
    totalPrice: { 
        type: Number, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ["pending", "shipped", "delivered"], 
        default: "pending" 
    },

},{
    timestamps:true,
    versionKey:false
})


export const Order =model("Order",orderSchema)