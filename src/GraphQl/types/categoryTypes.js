import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

export const CategoryType = new GraphQLObjectType({
    name: "Category",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        createdAt: { type: GraphQLString }, 
        updatedAt: { type: GraphQLString }  
    })
});