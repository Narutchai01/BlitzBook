import { Request, Response } from "express";
import { client, connectDB } from "../../server";
import { ObjectId } from "mongodb";

export const UpdateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, price } = req.body;
    await connectDB();

    if ( title === "" && price === "") {
      return res.status(400).send({ message: "Please fill all required field" });
    }
    else if ( title === undefined && price === undefined) {
      return res.status(400).send({ message: "Please fill all required field" });
    }
    else if ( title === null && price === null) {
      return res.status(400).send({ message: "Please fill all required field" });
    }
    else if ( title && price) {
      await client.db("Project_G").collection("books").updateOne({ _id: new ObjectId(id) }, { $set: { title: title, price: price } });
    }
    else if ( title ){
      await client.db("Project_G").collection("books").updateOne({ _id: new ObjectId(id) }, { $set: { title: title } });
    }
    else if ( price ){
      await client.db("Project_G").collection("books").updateOne({ _id: new ObjectId(id) }, { $set: { price: price } });
    }


    res.status(200).send({ message: "Update Book Success" });
  } catch (error) {
    console.log("Error", error);
  }
};
