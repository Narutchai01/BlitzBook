"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWriter = void 0;
const server_1 = require("../../server");
const GetWriter = async (req, res) => {
    try {
        await (0, server_1.connectDB)();
        const { Writer } = req.params;
        const result = await server_1.client.db("Project_G").collection(Writer).find({}).toArray();
        res.status(200).send({ result });
    }
    catch (error) {
        console.log("Error", error);
    }
};
exports.GetWriter = GetWriter;
