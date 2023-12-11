import { Request, Response } from "express";
import { client, connectDB } from "../server";

export const getBookByID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await connectDB();
    const matching = await client
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
    await client.close();
    res.status(200).send(book);
  } catch (error) {
    console.log(error);
  }
};
