import { GraphQLObjectType, GraphQLFloat, GraphQLInt, GraphQLString, GraphQLID } from "graphql";
import { CategoryType } from "./categoryTypes.js";


export const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        id: { type: GraphQLID }, 
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
        stock: { type: GraphQLInt },
        sold: { type: GraphQLInt },
        category: { type: CategoryType }, 
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }  
    })
});

