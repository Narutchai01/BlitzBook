import { Request, Response } from "express";
import { client, connectDB } from "../server";

export const getNewReleases = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const books = await client
      .db("Project_G")
      .collection("books")
      .aggregate([
        {
            $lookup:{
                from : "Publisher",
                localField : "publisher",
                foreignField : "_id",
                as : "publisher"
            }
        },
        {
            $lookup:{
                from : "Category",
                localField : "category",
                foreignField : "_id",
                as : "category"
            }
        },
        {
            $unwind: "$publisher"
        },
        {
            $unwind: "$category"
        },
        {
            $project:{
                _id:1,
                title:1,
                image:1,
                publisher: "$publisher.name",
                category: "$category.name",
                price:1,
            } 
        }
      ])
      .toArray();
    res.status(200).send(books);
  } catch (e) {
    console.log("Error", e);
  }
};
