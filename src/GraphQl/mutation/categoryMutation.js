import { GraphQLString, GraphQLID, GraphQLNonNull } from "graphql";
import { CategoryType } from "../types/categoryTypes.js";
import { Category } from "../../dataBase/models/category.model.js";


export const addCategory = {
    type: CategoryType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (_, args) => {
        const category = new Category(args);
        return await category.save();
    }
};


export const updateCategory = {
    type: CategoryType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString }
    },
    resolve: async (_, { id, name }) => {
        return await Category.findByIdAndUpdate(id, { name }, { new: true });
    }
};


export const deleteCategory = {
    type: GraphQLString,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    resolve: async (_, { id }) => {
        await Category.findByIdAndDelete(id);
        return "Category deleted successfully";
    }
};
