"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const server_1 = require("../server");
const checkToken = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(400).json({ message: "not token" });
        }
        const decode = jsonwebtoken_1.default.verify(token, server_1.secret);
        res.status(200).send({ message: "have token", token: decode });
    }
    catch (error) {
        res.status(500).send({ message: "Something went wrong" });
    }
};
exports.checkToken = checkToken;
