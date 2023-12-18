"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const server_1 = require("../server");
const server_2 = require("../server");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ManagementPassWord_1 = require("../lib/ManagementPassWord");
const login = async (req, res) => {
    try {
        await (0, server_1.connectDB)();
        const { email, password } = req.body;
        const findEmail = await server_1.client.db('user').collection('user').findOne({ email: email });
        if (!findEmail) {
            res.status(400).json({ message: 'email not found' });
            return false;
        }
        const MatchPassword = await (0, ManagementPassWord_1.matchPassword)(password, findEmail.password);
        if (!MatchPassword) {
            res.status(400).json({ message: 'password not match' });
            return false;
        }
        const payload = { id: findEmail._id, role: findEmail.role };
        const token = jsonwebtoken_1.default.sign(payload, server_2.secret, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: 'login success', result: findEmail });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something went wrong' });
    }
};
exports.login = login;
