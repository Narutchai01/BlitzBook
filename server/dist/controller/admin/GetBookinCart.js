"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookinCart = void 0;
const server_1 = require("../../server");
const mongodb_1 = require("mongodb");
const getBookinCart = async (req, res) => {
    try {
        await (0, server_1.connectDB)();
        const { userID } = req.query;
        const result = await server_1.client.db("Project_G").collection("Cart").find({ userID: new mongodb_1.ObjectId(String(userID)) }).toArray();
        const bookID = result.map((item) => item.bookID);
        const book = await server_1.client.db("Project_G").collection("books").find({ _id: { $in: bookID } }).toArray();
        res.status(200).send({ message: "Get book in cart", result: book });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getBookinCart = getBookinCart;
