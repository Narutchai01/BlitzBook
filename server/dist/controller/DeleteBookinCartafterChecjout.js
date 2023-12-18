"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBookinCartafterCh = void 0;
const server_1 = require("./../server");
const mongodb_1 = require("mongodb");
const DeleteBookinCartafterCh = async (req, res) => {
    try {
        const { userID } = req.query;
        await (0, server_1.connectDB)();
        await server_1.client.db("Project_G").collection("Cart").deleteMany({ userID: new mongodb_1.ObjectId(userID) });
        await server_1.client.close();
        res.status(200).send({
            status: "success",
            data: "delete success"
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.DeleteBookinCartafterCh = DeleteBookinCartafterCh;
