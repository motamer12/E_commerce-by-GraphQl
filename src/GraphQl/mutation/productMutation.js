import { GraphQLString, GraphQLFloat, GraphQLID, GraphQLNonNull, GraphQLInt } from "graphql";
import { ProductType } from "../types/productTypes.js";
import { Product } from "../../dataBase/models/product.model.js";


export const addProduct = {
    type: ProductType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        price: { type: new GraphQLNonNull(GraphQLFloat) },
        stock: { type: GraphQLInt },
        category: { type: GraphQLID }
    },
    resolve: async (_, args) => {
        const product = new Product(args);
        return (await product.save()).populate("category");
    }
};



export const updateProduct = {
    type: ProductType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
        stock: { type: GraphQLInt },
        category: { type: GraphQLID }
    },
    resolve: async (_, { id, ...updateData }) => {
        return await Product.findByIdAndUpdate(id, updateData, { new: true }).populate("category");
    }
};



export const deleteProduct = {
    type: GraphQLString,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    resolve: async (_, { id }) => {
        await Product.findByIdAndDelete(id);
        return "Product deleted successfully";
    }
};