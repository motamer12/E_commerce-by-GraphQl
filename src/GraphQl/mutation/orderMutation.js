import { GraphQLID, GraphQLNonNull, GraphQLFloat } from "graphql";
import { OrderType } from "../types/orderTypes.js";
import { Order } from "../../dataBase/models/order.model.js";
import { Cart } from "../../dataBase/models/cart.model.js";
import { Product } from "../../dataBase/models/product.model.js";

export const createOrder = {
  type: OrderType,
  args: {
    userId: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve: async (_, { userId }) => {
    // Find the user's cart
    const cart = await Cart.findOne({ user: userId }).populate("products.product");
    if (!cart || cart.products.length === 0) {
      throw new Error("Cart is empty or not found");
    }

    // Calculate total price
    let totalPrice = 0;
    for (const item of cart.products) {
      if (!item.product) throw new Error("Product not found");
      totalPrice += item.product.price * item.quantity;
    }

    // Create the order
    const order = new Order({
      user: userId,
      products: cart.products.map((item) => ({
        product: item.product._id,
        quantity: item.quantity
      })),
      totalPrice
    });

    await order.save();

    // Clear the cart after placing the order
    await Cart.findOneAndDelete({ user: userId });

    // Return the created order
    return await Order.findById(order._id).populate("user").populate("products.product");
  }
};
