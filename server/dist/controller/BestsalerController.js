"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBestSaler = void 0;
const server_1 = require("../server");
const getBestSaler = async (req, res) => {
    try {
        await (0, server_1.connectDB)();
        const result = await server_1.client
            .db("Project_G")
            .collection("books")
            .aggregate([
            {
                $sort: { sales: -1 },
            },
        ])
            .toArray();
        res.status(200).send({
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getBestSaler = getBestSaler;
