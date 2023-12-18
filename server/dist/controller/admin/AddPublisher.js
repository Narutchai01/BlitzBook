"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AaddPublisher = void 0;
const server_1 = require("../../server");
const AaddPublisher = async (req, res) => {
    try {
        const { name } = req.body;
        await (0, server_1.connectDB)();
        if (!name) {
            res.status(400).send({ message: "Please enter name publisher" });
            return false;
        }
        const find = await server_1.client.db("Project_G").collection("Publisher").findOne({ name });
        if (find) {
            res.status(400).send({ message: "Publisher already exists" });
            return false;
        }
        const result = await server_1.client.db("Project_G").collection("Publisher").insertOne({ name });
        res.status(200).send({ result });
    }
    catch (error) {
        console.log("Error", error);
    }
};
exports.AaddPublisher = AaddPublisher;
