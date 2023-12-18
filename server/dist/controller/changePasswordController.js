"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = void 0;
const server_1 = require("../server");
const ManagementPassWord_1 = require("../lib/ManagementPassWord");
const mongodb_1 = require("mongodb");
const changePassword = async (req, res) => {
    try {
        const { id, password, newpassword } = req.body;
        await (0, server_1.connectDB)();
        const findUser = await server_1.client.db("user").collection("user").findOne({ _id: new mongodb_1.ObjectId(id) });
        if (!findUser) {
            return res.status(400).send("User not found");
        }
        const match = await (0, ManagementPassWord_1.matchPassword)(password, findUser.password);
        if (!match) {
            return res.status(400).send("Wrong password");
        }
        const hash = await (0, ManagementPassWord_1.hashPassword)(newpassword);
        await server_1.client.db("user").collection("user").updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { password: hash } });
        res.status(200).send("Change Password Success");
    }
    catch (error) {
        console.log("Error", error);
    }
};
exports.changePassword = changePassword;
