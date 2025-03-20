import { GraphQLList, GraphQLID } from "graphql";
import { UserType } from "../types/userTypes.js";
import { User } from "../../dataBase/models/user.model.js";


export const users = {
  type: new GraphQLList(UserType),
  resolve: async () => await User.find()
};

export const user = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve: async (_, { id }) => await User.findById(id)
};
