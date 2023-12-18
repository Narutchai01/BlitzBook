"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookByID = void 0;
const server_1 = require("../../server");
const mongodb_1 = require("mongodb");
const deleteBookByID = async (req, res) => {
    try {
        await (0, server_1.connectDB)();
        const { id } = req.params;
        const result = await server_1.client.db("Project_G").collection("books").deleteOne({ _id: new mongodb_1.ObjectId(id) });
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
};
exports.deleteBookByID = deleteBookByID;
