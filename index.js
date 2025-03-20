import express from "express";
import { graphqlHTTP } from "express-graphql";
import { dbConnection } from "./src/dataBase/dbConnection.js";
import { schema } from "./src/GraphQl/schema.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();


app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true 
}));


const PORT =  process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
