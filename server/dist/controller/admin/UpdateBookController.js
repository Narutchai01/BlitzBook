"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBook = void 0;
const server_1 = require("../../server");
const mongodb_1 = require("mongodb");
const UpdateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, price } = req.body;
        await (0, server_1.connectDB)();
        if (title === "" && price === "") {
            return res.status(400).send({ message: "Please fill all required field" });
        }
        else if (title === undefined && price === undefined) {
            return res.status(400).send({ message: "Please fill all required field" });
        }
        else if (title === null && price === null) {
            return res.status(400).send({ message: "Please fill all required field" });
        }
        else if (title && price) {
            await server_1.client.db("Project_G").collection("books").updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { title: title, price: price } });
        }
        else if (title) {
            await server_1.client.db("Project_G").collection("books").updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { title: title } });
        }
        else if (price) {
            await server_1.client.db("Project_G").collection("books").updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { price: price } });
        }
        res.status(200).send({ message: "Update Book Success" });
    }
    catch (error) {
        console.log("Error", error);
    }
};
exports.UpdateBook = UpdateBook;
