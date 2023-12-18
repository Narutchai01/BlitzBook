import { dbConnect } from "../lib/mysql";
import { Request, Response } from "express";
import { reportError, getErrorMessage } from "../lib/Error";

export const GetMyCollection = async (req: Request, res: Response) => {
  try {
    const { userID } = req.query;
    const client = await dbConnect();
    const result = await client.query(
      `SELECT * FROM Transaction JOIN ComicBook ON Transaction.bookID = ComicBook._id WHERE userID = ?`,
      userID
    );

    const collection = Array.isArray(result[0])
      ? result[0].map((item: any) => {
          return {
            bookID: String(item.bookID),
            bookName: item.title,
            bookImage: item.image,
            bookPDF: item.pdf,
          };
        })
      : [];
    res.status(200).send(collection);
  } catch (error) {
    console.log(error);
    
  }
};
