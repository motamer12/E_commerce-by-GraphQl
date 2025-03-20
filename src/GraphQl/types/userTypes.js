import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

export const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID }, 
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        role: { type: GraphQLString },
        createdAt: { type: GraphQLString }, 
        updatedAt: { type: GraphQLString }  
    })
});
