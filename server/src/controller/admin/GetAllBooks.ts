import { Request, Response } from "express";
import { client, connectDB } from "../../server";

export const getallBooks = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const result = await client.db("Project_G").collection("books").find({}).toArray();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};
