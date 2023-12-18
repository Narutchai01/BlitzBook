"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const server_1 = require("../server");
const ManagementPassWord_1 = require("../lib/ManagementPassWord");
const signup = async (req, res) => {
    try {
        const { username, password, email, role, date, fname, lname } = req.body;
        await (0, server_1.connectDB)();
        const createuser = {
            fname,
            lname,
            username,
            date,
            password: await (0, ManagementPassWord_1.hashPassword)(password),
            email,
            role: role || "user"
        };
        await server_1.client.db('user').collection('user').insertOne(createuser);
        res.status(201).json(createuser);
        await server_1.client.close();
    }
    catch (error) {
        console.log('Error', error);
    }
};
exports.signup = signup;
