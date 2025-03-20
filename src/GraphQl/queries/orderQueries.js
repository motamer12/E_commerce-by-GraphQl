import { GraphQLList, GraphQLID } from "graphql";
import { Order } from "../../dataBase/models/order.model.js";
import { OrderType } from "../types/orderTypes.js";


export const orders = {
  type: new GraphQLList(OrderType),
  resolve: async () => await Order.find().populate("user").populate("products.product")
};

export const order = {
  type: OrderType,
  args: { id: { type: GraphQLID } },
  resolve: async (_, { id }) => await Order.findById(id).populate("user").populate("products.product")
};
