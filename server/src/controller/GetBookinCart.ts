import { Request, Response } from "express";
import { client, connectDB } from "../server";
import { ObjectId } from "mongodb";

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
      ])
      .toArray();
    res.status(200).send({ message: "Get book in cart", matching });
  } catch (error) {
    console.log(error);
  }
};
