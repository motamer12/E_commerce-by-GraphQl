import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat, GraphQLList, GraphQLInt } from "graphql";
import { UserType } from "./userTypes.js";
import { ProductType } from "./productTypes.js";


const OrderProductType = new GraphQLObjectType({
    name: "OrderProduct",
    fields: () => ({
        product: { type: ProductType }, 
        quantity: { type: GraphQLInt }
    })
});

export const OrderType = new GraphQLObjectType({
    name: "Order",
    fields: () => ({
        id: { type: GraphQLID }, 
        user: { type: UserType }, 
        products: { type: new GraphQLList(OrderProductType) }, 
        totalPrice: { type: GraphQLFloat },
        status: { type: GraphQLString },
        createdAt: { type: GraphQLString }, 
        updatedAt: { type: GraphQLString }  
    })
});
