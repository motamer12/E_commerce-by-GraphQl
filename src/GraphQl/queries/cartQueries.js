import { GraphQLList, GraphQLID } from "graphql";
import { CartType } from "../types/cartTypes.js";
import { Cart } from "../../dataBase/models/cart.model.js";
import { User } from "../../dataBase/models/user.model.js";


export const cart = {
  type: CartType,
  args: { userId: { type: GraphQLID } },
  resolve: async (_, { userId }) => {
    return await Cart.findOne({ user: userId }).populate({
      path: "products.product",
      model: "Product"
    });
  }
};