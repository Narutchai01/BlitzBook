"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutController = void 0;
const server_1 = require("../server");
const mongodb_1 = require("mongodb");
const CheckoutController = async (req, res) => {
    try {
        const { userID, bookID, totalAmout } = req.body;
        const book = Promise.all(bookID?.map(async (item) => {
            return new mongodb_1.ObjectId(item);
        }));
        const transactionData = {
            userID,
            bookID: await book,
            totalAmout,
            date: new Date(),
        };
        await (0, server_1.connectDB)();
        bookID?.map(async (item) => {
            const result = await server_1.client
                .db("Project_G")
                .collection("books")
                .findOne({ _id: new mongodb_1.ObjectId(item) });
            const result2 = await server_1.client
                .db("Project_G")
                .collection("books")
                .updateOne({ _id: result?._id }, { $set: { sales: result?.sales + 1 } });
            console.log(result2);
        });
        const result = await server_1.client
            .db("Project_G")
            .collection("Transaction")
            .insertOne(transactionData)
            .catch((error) => {
            console.log(error);
        });
        res.status(200).send({
            checkout: "succsec",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.CheckoutController = CheckoutController;
