"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getalluser = void 0;
const server_1 = require("../server");
const getalluser = async (req, res) => {
    try {
        await (0, server_1.connectDB)();
        const db = server_1.client.db("user");
        const collection = db.collection("user");
        const result = await collection.find({}).toArray();
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.getalluser = getalluser;
