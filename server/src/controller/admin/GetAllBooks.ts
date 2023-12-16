import { Request, Response } from "express";
import { client, connectDB } from "../../server";

export const getallBooks = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const result = await client
      .db("Project_G")
      .collection("books")
      .aggregate([
        {
          $lookup: {
            from: "Author",
            localField: "author",
            foreignField: "_id",
            as: "authorObj"
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
      ])
      .toArray();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
