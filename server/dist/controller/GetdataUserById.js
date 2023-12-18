"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataUserByID = void 0;
const server_1 = require("../server");
const mongodb_1 = require("mongodb");
const getDataUserByID = async (req, res) => {
    try {
        const { id } = req.params;
        await (0, server_1.connectDB)();
        const findUser = await server_1.client.db("user").collection("user").findOne({ _id: new mongodb_1.ObjectId(id) });
        if (!findUser) {
            res.status(404).json({ message: "User not found" });
            return false;
        }
        res.status(200).json(findUser);
    }
    catch (e) {
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.getDataUserByID = getDataUserByID;
