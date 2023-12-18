"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookinCart = void 0;
const server_1 = require("../server");
const mongodb_1 = require("mongodb"); // Add missing import statement
const getBookinCart = async (req, res) => {
    try {
        await (0, server_1.connectDB)();
        const { userID } = req.query;
        const matching = await server_1.client
            .db("Project_G")
            .collection("Cart")
            .aggregate([
            {
                $match: {
                    userID: new mongodb_1.ObjectId(userID),
                },
            },
            {
                $lookup: {
                    from: "books",
                    localField: "bookID",
                    foreignField: "_id",
                    as: "bookInfo",
                },
            },
            {
                $unwind: "$bookInfo",
            },
            {
                $project: {
                    _id: 1,
                    bookID: 1,
                    userID: 1,
                    bookName: "$bookInfo.title",
                    bookPrice: "$bookInfo.price",
                    bookImage: "$bookInfo.image",
                    bookAmount: 1,
                    publisherID: "$bookInfo.publisher",
                },
            },
            {
                $lookup: {
                    from: "Publisher",
                    localField: "publisherID",
                    foreignField: "_id",
                    as: "publisher",
                },
            },
            {
                $unwind: "$publisher",
            },
            {
                $project: {
                    _id: 1,
                    bookID: 1,
                    userID: 1,
                    bookName: 1,
                    bookPrice: 1,
                    bookImage: 1,
                    bookAmount: 1,
                    publisherName: "$publisher.name",
                },
            }
        ])
            .toArray();
        res.status(200).send({ message: "Get book in cart", matching });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getBookinCart = getBookinCart;
