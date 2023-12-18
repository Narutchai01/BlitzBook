"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewReleases = void 0;
const server_1 = require("../server");
const getNewReleases = async (req, res) => {
    try {
        await (0, server_1.connectDB)();
        const books = await server_1.client
            .db("Project_G")
            .collection("books")
            .aggregate([
            {
                $lookup: {
                    from: "Publisher",
                    localField: "publisher",
                    foreignField: "_id",
                    as: "publisher"
                }
            },
            {
                $lookup: {
                    from: "Category",
                    localField: "category",
                    foreignField: "_id",
                    as: "category"
                }
            },
            {
                $unwind: "$publisher"
            },
            {
                $unwind: "$category"
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    image: 1,
                    publisher: "$publisher.name",
                    category: "$category.name",
                    price: 1,
                }
            }
        ])
            .toArray();
        res.status(200).send(books);
    }
    catch (e) {
        console.log("Error", e);
    }
};
exports.getNewReleases = getNewReleases;
