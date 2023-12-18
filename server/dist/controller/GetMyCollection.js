"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMyCollection = void 0;
const server_1 = require("../server");
const GetMyCollection = async (req, res) => {
    try {
        await (0, server_1.connectDB)();
        const { userID } = req.query;
        const collection = await server_1.client
            .db("Project_G")
            .collection("Transaction")
            .aggregate([
            {
                $match: {
                    userID: userID,
                },
            },
            {
                $lookup: {
                    from: "books",
                    localField: "bookID",
                    foreignField: "_id",
                    as: "books",
                },
            },
            {
                $unwind: "$books",
            },
            {
                $project: {
                    _id: 0,
                    bookID: "$books._id",
                    bookName: "$books.title",
                    bookImage: "$books.image",
                    bookPDF: "$books.pdf",
                },
            },
        ])
            .toArray();
        res.status(200).send(collection);
    }
    catch (error) {
        console.log(error);
    }
};
exports.GetMyCollection = GetMyCollection;
