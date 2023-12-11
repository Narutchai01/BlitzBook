import { Request, Response } from "express";
import { client, connectDB } from "../../server";

export const AddCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    await connectDB();
    if (!name) {
      res.status(400).send({ message: "Please enter name catagory" });
      return false;
    }
    const find = await client
      .db("Project_G")
      .collection("Catagory")
      .findOne({ name });
    if (find) {
      res.status(400).send({ message: "Catagory already exists" });
      return false;
    }
    const result = await client
      .db("Project_G")
      .collection("Category")
      .insertOne({ name });
    res.status(200).send({ result });
  } catch (error) {
    console.log("Error", error);
  }
};
