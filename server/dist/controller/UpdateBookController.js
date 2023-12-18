"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBook = void 0;
const server_1 = require("../server");
const UpdateBook = async (req, res) => {
    try {
        // Get the ID, title, and price for the book
        const { _id, title, price } = req.body;
        // Connect to the database
        await (0, server_1.connectDB)();
        // Create an object to update the book
        const updateBook = {
            title,
            price
        };
        // Update the book in the book collection
        await server_1.client.db("book").collection("book").updateOne({ _id }, { $set: updateBook });
        // Send the updated book back to the requester
        res.status(201).json(updateBook);
    }
    catch (error) {
        console.log("Error", error);
    }
};
exports.UpdateBook = UpdateBook;
