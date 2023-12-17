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
      ])
      .toArray();
    res.status(200).send({
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
