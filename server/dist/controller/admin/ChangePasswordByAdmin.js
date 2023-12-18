"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordByAdmin = void 0;
const server_1 = require("../../server");
const mongodb_1 = require("mongodb");
const changePasswordByAdmin = async (req, res) => {
    try {
        console.log("changePasswordByAdmin");
        const { id } = req.query;
        const { password } = req.body;
        await (0, server_1.connectDB)();
        const updatePassword = {
            password
        };
        const result = await server_1.client.db("user").collection("user").updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: updatePassword });
        res.status(201).json(result);
    }
    catch (error) {
        console.log("Error", error);
    }
};
exports.changePasswordByAdmin = changePasswordByAdmin;
