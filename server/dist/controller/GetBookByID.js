"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookByID = void 0;
const server_1 = require("../server");
const getBookByID = async (req, res) => {
    try {
        const { id } = req.params;
        await (0, server_1.connectDB)();
        const matching = await server_1.client
            .db("Project_G")
            .collection("books")
            .aggregate([
            {
                $lookup: {
                    from: "Author",
                    localField: "author",
                    foreignField: "_id",
                    as: "authorObj",
                },
            },
            {
                $lookup: {
                    from: "Publisher",
                    localField: "publisher",
                    foreignField: "_id",
                    as: "publisherInfo",
                },
            },
            {
                $lookup: {
                    from: "Category",
                    localField: "category",
                    foreignField: "_id",
                    as: "categoryDetails",
                },
            },
        ]);
        const result = await matching.toArray();
        const book = await result.find((book) => book._id.toString() === id);
        res.status(200).send(book);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getBookByID = getBookByID;
