import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { addCategory, deleteCategory, updateCategory } from "./mutation/categoryMutation.js";
import { addProduct, deleteProduct, updateProduct } from "./mutation/productMutation.js";
import { deleteUser, registerUser, updateUser } from "./mutation/userMutation.js";
import { addToCart, clearCart, removeFromCart, updateCartItem } from "./mutation/cartMutation.js";
import { user, users } from "./queries/userQueries.js";
import { product, products } from "./queries/productQueries.js";
import { categories, category } from "./queries/categoryQueries.js";
import { order, orders } from "./queries/orderQueries.js";
import { cart } from "./queries/cartQueries.js";
import { createOrder } from "./mutation/orderMutation.js";


export const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        users,
        user,
        products,
        product,
        categories,
        category,
        orders,
        order,
        cart
    }
  });

  export const RootMutation = new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
        addProduct,
        updateProduct,
        deleteProduct,
        addCategory,
        updateCategory,
        deleteCategory,
        registerUser,
        updateUser,
        deleteUser,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
        createOrder
    }
  });

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
