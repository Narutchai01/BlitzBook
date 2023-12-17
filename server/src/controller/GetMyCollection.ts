import { Request, Response } from "express";
import { client, connectDB } from "../server";

export const GetMyCollection = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const { userID } = req.query;
    const collection = await client
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
            bookID : "$books._id",
            bookName: "$books.title",
            bookImage: "$books.image",
            bookPDF: "$books.pdf",
          },
        },
      ])
      .toArray();
    res.status(200).send(collection);
  } catch (error) {
    console.log(error);
  }
};
