"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AaddAuthor = void 0;
const server_1 = require("../../server");
const AaddAuthor = async (req, res) => {
    try {
        await (0, server_1.connectDB)();
        const { name } = req.body;
        if (!name) {
            res.status(400).send({ message: "Please enter name author" });
            return false;
        }
        const find = await server_1.client.db("Project_G").collection("Author").findOne({ name });
        if (find) {
            res.status(400).send({ message: "Author already exists" });
            return false;
        }
        const result = await server_1.client.db("Project_G").collection("Author").insertOne({ name });
        res.status(200).send({ result });
    }
    catch (e) {
        console.log("Error", e);
    }
};
exports.AaddAuthor = AaddAuthor;
