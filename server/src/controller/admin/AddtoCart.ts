import { Request, Response } from "express";
import { client, connectDB } from "../../server";

export const AddtoCart = async (req: Request, res: Response) => {
  try {
    await connectDB();
    const { userID , bookID } = req.query;
    const data = { 
        userID,
        bookID,
        data : new Date()
     };
    const result = await client.db("Project_G").collection("Cart").insertOne(data);
    res.status(200).send({ message: "Add to cart" , result: result});
    console.log("Add to cart");
  } catch (error) {
    console.log(error);
  }
};
