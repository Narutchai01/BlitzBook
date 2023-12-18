"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getalluser = void 0;
const server_1 = require("../../server");
const getalluser = async (req, res) => {
    try {
        // await client.connect();
        await (0, server_1.connectDB)();
        const result = await server_1.client.db("user").collection("user").find({ role: "user" }).toArray();
        res.status(200).send(result);
    }
    catch (e) {
        res.status(500).send({ message: "Internal server error" });
    }
};
exports.getalluser = getalluser;
