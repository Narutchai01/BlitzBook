import { Request, Response } from "express";
import { client, connectDB } from "../server";

export const MyPurchaseController = async (req: Request, res: Response) => {
  try {
    const { userID } = req.query;
    // await connectDB();
    await client.connect();
    const findBook = await client
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
            as: "book",
          },
        },
        {
          $project: {
            userID: 0,
            bookID: 0,
            "book.date": 0,
            "book.publisher": 0,
            "book.author": 0,
            "book.description": 0,
            "book.category": 0,
            "book.pdf": 0,
            "book.sales": 0,
          },
        },
      ])
      .toArray();
    res.status(200).json(findBook);
  } catch (e) {
    console.log("Error", e);
  }
};
