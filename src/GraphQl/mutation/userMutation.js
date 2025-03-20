import { GraphQLString, GraphQLID, GraphQLNonNull } from "graphql";
import bcrypt from "bcryptjs";
import { UserType } from "../types/userTypes.js";
import { User } from "../../dataBase/models/user.model.js";


export const registerUser = {
    type: UserType,
    args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
},
    resolve: async (_, { name, email, password }) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        return await user.save();
}};


export const updateUser = {
    type: UserType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
},
    resolve: async (_, { id, name, email, password }) => {
        const updateData = {};
        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (password) updateData.password = await bcrypt.hash(password, 10);

        return await User.findByIdAndUpdate(id, updateData, { new: true });
}};


export const deleteUser = {
    type: GraphQLString,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    resolve: async (_, { id }) => {
        await User.findByIdAndDelete(id);
        return "User deleted successfully";
}};
