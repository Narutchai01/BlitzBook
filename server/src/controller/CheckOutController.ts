import { Request, Response } from "express";
import { client, connectDB } from "../server";
import { ObjectId } from "mongodb";

export const CheckoutController = async (req: Request, res: Response) => {
  try {
    const { userID, bookID, totalAmout } = req.body;
    const transactionData = {
      userID,
      bookID,
      totalAmout,
      data: new Date(),
    };
    await connectDB();
    bookID?.map(async (item: any) => {
      const result = await client
        .db("Project_G")
        .collection("books")
        .findOne({ _id: new ObjectId(item) });
      const result2 = await client
        .db("Project_G")
        .collection("books")
        .updateOne(
          { _id: result?._id },
          { $set: { sales: result?.sales + 1 } }
        );
      console.log(result2);
    });
    const result = await client
      .db("Project_G")
      .collection("Transaction")
      .insertOne(transactionData)
      .catch((error: any) => {
        console.log(error);
      });
    res.status(200).send({
      checkout: "succsec",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
