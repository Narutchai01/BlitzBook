"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchbook = void 0;
const server_1 = require("../server");
const searchbook = async (req, res) => {
    try {
        await (0, server_1.connectDB)();
        const result = await server_1.client.db("Project_G").collection("books").find({}).toArray();
        res.status(200).send(result);
    }
    catch (e) {
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.searchbook = searchbook;
