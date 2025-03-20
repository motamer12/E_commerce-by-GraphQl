import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLInt } from "graphql";
import { ProductType } from "./productTypes.js";

const CartProductType = new GraphQLObjectType({
  name: "CartProduct",
  fields: () => ({
    product: { type: ProductType }, 
    quantity: { type: GraphQLInt }
  })
});

export const CartType = new GraphQLObjectType({
  name: "Cart",
  fields: () => ({
    id: { type: GraphQLID },
    user: { type: GraphQLID },
    products: { type: new GraphQLList(CartProductType) } 
  })
});

