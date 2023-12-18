"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = void 0;
const logout = (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'logout' });
    }
    catch (error) {
        console.log(error);
    }
};
exports.logout = logout;
