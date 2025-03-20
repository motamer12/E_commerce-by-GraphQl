import { GraphQLString, GraphQLID, GraphQLInt, GraphQLNonNull } from "graphql";
import { CartType } from "../types/cartTypes.js";
import { Cart } from "../../dataBase/models/cart.model.js";
import { Product } from "../../dataBase/models/product.model.js";


export const addToCart = {
        type: CartType,
        args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        productId: { type: new GraphQLNonNull(GraphQLID) },
        quantity: { type: GraphQLInt, defaultValue: 1 }
        },
        resolve: async (_, { userId, productId, quantity }) => {
        let cart = await Cart.findOne({ user: userId });
    
        if (!cart) {
            cart = new Cart({ user: userId, products: [] });
        }
    
        const existingProductIndex = cart.products.findIndex(
            (item) => item.product.toString() === productId
        );
    
        if (existingProductIndex > -1) {
            cart.products[existingProductIndex].quantity += quantity;
        } else {
            cart.products.push({ product: productId, quantity });
        }
    
        await cart.save();
    

        return await Cart.findById(cart._id).populate("products.product");
        }
    };


export const updateCartItem = {
    type: CartType,
    args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        productId: { type: new GraphQLNonNull(GraphQLID) },
        quantity: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve: async (_, { userId, productId, quantity }) => {
        const cart = await Cart.findOne({ user: userId });
        if (!cart) throw new Error("Cart not found");

        const productIndex = cart.products.findIndex(
        (item) => item.product.toString() === productId
        );

        if (productIndex > -1) {
        cart.products[productIndex].quantity = quantity;
        return await cart.save();
        } else {
        throw new Error("Product not found in cart");
        }
    }
    };


export const removeFromCart = {
    type: CartType,
    args: {
        userId: { type: new GraphQLNonNull(GraphQLID) },
        productId: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: async (_, { userId, productId }) => {
        const cart = await Cart.findOne({ user: userId });
        if (!cart) throw new Error("Cart not found");

        cart.products = cart.products.filter(
        (item) => item.product.toString() !== productId
        );

        return await cart.save();
    }
    };


export const clearCart = {
    type: GraphQLString,
    args: {
        userId: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: async (_, { userId }) => {
        await Cart.findOneAndDelete({ user: userId });
        return "Cart cleared successfully";
    }
    };
