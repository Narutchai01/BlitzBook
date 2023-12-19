import { dbConnect } from "../lib/mysql";
import { Request, Response } from "express";
import { reportError, getErrorMessage } from "../lib/Error";

export const GetBookByID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const client = await dbConnect();
    const result: any = await client.query(
      `SELECT * FROM GetbookID WHERE _id = ?`,
      id
    );
    if (result[0].length < 1) {
      res.status(404).send({
        message: "Comic not found",
      });
    }
    const bookbyid = result[0].map((book: any) => {
        return {
            _id: String(book._id),
            title: book.title,
            description: book.description,
            image: book.image,
            price: book.price,
            date : book.date,
            authorObj: [
                {
                    _id: book.authorID,
                    name: book.authorName,
                }
            ],
            publisherInfo: [
                {
                    _id: book.publisherID,
                    name: book.publisherName,
                }
            ],
            categoryDetails: [
                {
                    _id: book.categoryID,
                    name: book.categoryName,
                }
            ],
        };
    });
    // const bookbyid = result[0][0]
    return res.status(200).send(bookbyid[0]);
  } catch (error) {
    console.log(error);
  }
};
