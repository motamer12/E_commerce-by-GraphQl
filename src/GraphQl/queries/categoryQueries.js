import { GraphQLList, GraphQLID } from "graphql";
import { CategoryType } from "../types/categoryTypes.js";
import { Category } from "../../dataBase/models/category.model.js";


export const categories = {
  type: new GraphQLList(CategoryType),
  resolve: async () => await Category.find()
};

export const category = {
  type: CategoryType,
  args: { id: { type: GraphQLID } },
  resolve: async (_, { id }) => await Category.findById(id)
};
