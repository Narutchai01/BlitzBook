import e, { Request, Response } from "express";
import { client, connectDB } from "../server";
import { ObjectId } from "mongodb";

export const test = async (req: Request, res: Response) => {
  try {
    const jpgRegex = /\.jpg$/;
    const { bookID } = req.body;
    await connectDB();
    bookID?.map(async (item: any) => {
      if (item.match(jpgRegex)) {
        console.log(item);
      }
      else {
        console.log(item);
      }
    });
    res.status(200).send({
      test: "succsec",
    });
  } catch (error) {
    console.log(error);
  }
};
