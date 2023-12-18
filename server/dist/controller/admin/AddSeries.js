"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSeries = void 0;
const server_1 = require("../../server");
const AddSeries = async (req, res) => {
    try {
        const { name } = req.body;
        await (0, server_1.connectDB)();
        if (!name) {
            res.status(400).send({ message: "Please enter name Series" });
            return false;
        }
        const find = await server_1.client.db("Project_G").collection("Series").findOne({ name });
        if (find) {
            res.status(400).send({ message: "Series already exists" });
            return false;
        }
        const result = await server_1.client.db("Project_G").collection("Series").insertOne({ name });
        res.status(200).send({ result });
    }
    catch (error) {
        console.log("Error", error);
    }
};
exports.AddSeries = AddSeries;
