import { Request, Response } from "express";
import { client, connectDB } from "../server";
import { ObjectId } from "mongodb"; // Add missing import statement

export const getBookinCart = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const { userID } = req.query;
    const matching = await client
      .db("Project_G")
      .collection("Cart")
      .aggregate([
        {
          $match: {
            userID: new ObjectId(userID as string),
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
  } catch (error) {
    console.log(error);
  }
};
