"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBookinCartForCheckout = exports.DeleteBookinCart = void 0;
const server_1 = require("../server");
const mongodb_1 = require("mongodb");
const DeleteBookinCart = async (req, res) => {
    try {
        await (0, server_1.connectDB)();
        const { id } = req.query;
        const deleteBookinCart = await server_1.client.db("Project_G").collection("Cart").deleteOne({ _id: new mongodb_1.ObjectId(id) });
        res.status(200).send({ message: "Delete book in cart", deleteBookinCart });
    }
    catch (error) {
        console.log(error);
    }
};
exports.DeleteBookinCart = DeleteBookinCart;
const DeleteBookinCartForCheckout = async (req, res) => {
    try {
        const { id } = req.query;
        const result = await server_1.client.db("Project_G").collection("Cart").deleteMany({ userID: new mongodb_1.ObjectId(id) });
        res.status(200).send({ message: "Delete book in cart", result });
    }
    catch (error) {
        console.log(error);
    }
};
exports.DeleteBookinCartForCheckout = DeleteBookinCartForCheckout;
