"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const server_1 = require("../server");
const test = async (req, res) => {
    try {
        const jpgRegex = /\.jpg$/;
        const { bookID } = req.body;
        await (0, server_1.connectDB)();
        bookID?.map(async (item) => {
            if (item.match(jpgRegex)) {
                console.log(item);
            }
            else {
                console.log(item);
            }
        });
        res.status(200).send({
            test: "succsec",
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.test = test;
