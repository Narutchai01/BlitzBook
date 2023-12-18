"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCatagory = void 0;
const server_1 = require("../../server");
const AddCatagory = async (req, res) => {
    try {
        const { name } = req.body;
        await (0, server_1.connectDB)();
        if (!name) {
            res.status(400).send({ message: "Please enter name catagory" });
            return false;
        }
        const find = await server_1.client
            .db("Project_G")
            .collection("Catagory")
            .findOne({ name });
        if (find) {
            res.status(400).send({ message: "Catagory already exists" });
            return false;
        }
        const result = await server_1.client
            .db("Project_G")
            .collection("Catagory")
            .insertOne({ name });
        res.status(200).send({ result });
    }
    catch (error) {
        console.log("Error", error);
    }
};
exports.AddCatagory = AddCatagory;
