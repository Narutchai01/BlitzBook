"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    port: process.env.PORT || 3000,
    mongoURI: String(process.env.MONGO_URI),
    supabaseKey: String(process.env.SUPABASE_KEY),
    supabaseURL: String(process.env.SUPABASE_URL),
    origin: String(process.env.ORIGIN),
};
