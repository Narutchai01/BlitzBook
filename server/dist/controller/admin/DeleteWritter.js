"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWritter = void 0;
const server_1 = require("../../server");
const mongodb_1 = require("mongodb");
const DeleteWritter = async (req, res) => {
    try {
        const { type, id } = req.params;
        await (0, server_1.connectDB)();
        const result = await server_1.client.db("Project_G").collection(type).deleteOne({ _id: new mongodb_1.ObjectId(id) });
        res.status(200).send({
            result
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.DeleteWritter = DeleteWritter;
