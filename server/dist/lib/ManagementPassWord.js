"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.matchPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
// Check if the given password matches the given hash.
const matchPassword = async (password, hash) => {
    const isMatch = await bcrypt_1.default.compare(password, hash);
    return isMatch;
};
exports.matchPassword = matchPassword;
const hashPassword = async (password) => {
    const salt = await bcrypt_1.default.genSalt(saltRounds); // Generate a random string, which we will add to the password before hashing
    const hash = await bcrypt_1.default.hash(password, salt); // Hash the password, using the random string as "salt"
    return hash;
};
exports.hashPassword = hashPassword;
