import { GraphQLList, GraphQLID } from "graphql";
import { ProductType } from "../types/productTypes.js";
import { Product } from "../../dataBase/models/product.model.js";


export const products = {
  type: new GraphQLList(ProductType),
  resolve: async () => await Product.find()
};

export const product = {
  type: ProductType,
  args: { id: { type: GraphQLID } },
  resolve: async (_, { id }) => await Product.findById(id)
};