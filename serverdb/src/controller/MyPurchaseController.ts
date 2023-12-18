import { dbConnect } from "../lib/mysql";
import { Request, Response } from "express";

export const MyPurchase = async (req: Request, res: Response) => {
    try {
        const { userID } = req.query;
        const client = await dbConnect();
        const result = await client.query(
            `
SELECT Transaction._id _id, Transaction.totalAmout totalAmout,Transaction.date date, ComicBook._id bookID , ComicBook.title title , ComicBook.price price , ComicBook.image image  FROM Transaction JOIN ComicBook ON Transaction.bookID = ComicBook._id WHERE userID = ?`,
            userID
        );
        const findBook = Array.isArray(result[0])
            ? result[0].reduce((acc: any, item: any) => {
                    const existingItem = acc.find((i: any) => i._id === item._id);
                    if (existingItem) {
                        existingItem.book.push({
                            _id: String(item.bookID),
                            title: item.title,
                            price: item.price,
                            image: item.image,
                        });
                    } else {
                        acc.push({
                            _id: item._id,
                            totalAmout: item.totalAmout,
                            date: item.date,
                            book: [
                                {
                                    _id: String(item.bookID),
                                    title: item.title,
                                    price: item.price,
                                    image: item.image,
                                },
                            ],
                        });
                    }
                    return acc;
                }, [])
            : [];
        res.status(200).send(findBook);
    } catch (error) {
       console.log(error);
        
    }
};
