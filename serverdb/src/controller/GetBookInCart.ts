import { dbConnect } from "../lib/mysql";
import { Request, Response } from "express";

export const GetBookInCart = async (req: Request, res: Response) => {
    try {
        const { userID } = req.query;
        const client = await dbConnect();
        const result: any = await client.query(`select Cart._id _id ,Cart.userID userID , ComicBook._id bookID , title bookName, author , publisher publisherName , category , price bookPrice , description , image bookImage, pdf , sales , date from ComicBook join Cart on ComicBook._id = Cart.bookID WHERE userID = ?`, userID);

        const matching = result[0].map((item: any) => {
            return {
                _id: String(item._id),
                userID: String(item.userID),
                bookID: String(item.bookID),
                bookName: String(item.bookName),
                bookPrice: String(item.bookPrice),
                bookImage: String(item.bookImage),
                publisherName: String(item.publisherName),
            }})
        return res.status(200).send({message: "Get book in cart", matching });
    } catch (error) {
        console.log(error);
    }
};
