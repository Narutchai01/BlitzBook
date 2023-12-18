"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddtoCart = void 0;
const server_1 = require("../../server");
const mongodb_1 = require("mongodb");
const AddtoCart = async (req, res) => {
    try {
        await (0, server_1.connectDB)();
        const { userID, bookID } = req.query;
        const data = {
            userID: new mongodb_1.ObjectId(String(userID)),
            bookID: new mongodb_1.ObjectId(String(bookID)),
        };
        const result = await server_1.client
            .db("Project_G")
            .collection("Cart")
            .insertOne(data);
        res.status(200).send({ message: "Add to cart", result: result });
        console.log("Add to cart");
    }
    catch (error) {
        console.log(error);
    }
};
exports.AddtoCart = AddtoCart;
