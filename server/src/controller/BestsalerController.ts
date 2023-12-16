import { Request, Response } from "express";
import { client, connectDB } from "../server";

export const getBestSaler = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const result = await client
      .db("Project_G")
      .collection("books")
      .aggregate([
        {
          $sort: { sales: -1 },
        },
        {
          $lookup: {
            from: "Author",
            localField: "author",
            foreignField: "_id",
            as: "authorDetails",
          },
        },
        {
          $lookup: {
            from: "Publisher",
            localField: "publisher",
            foreignField: "_id",
            as: "publisherDetails",
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
      ]).toArray();
    res.status(200).send({
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
