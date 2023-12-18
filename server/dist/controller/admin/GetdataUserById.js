"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataUserByID = void 0;
const server_1 = require("../../server");
const mongodb_1 = require("mongodb");
const getDataUserByID = async (req, res) => {
    try {
        const { id } = req.query;
        await (0, server_1.connectDB)();
        const result = await server_1.client.db("user").collection("user").findOne({ _id: new mongodb_1.ObjectId(id) });
        await server_1.client.close();
        res.status(200).json({ message: "success", data: result });
    }
    catch (e) {
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.getDataUserByID = getDataUserByID;
