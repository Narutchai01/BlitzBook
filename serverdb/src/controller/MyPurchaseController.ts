import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';
    
    export const MyPurchase = async (req: Request , res: Response ) => {
        try {
            const { userID } = req.query; 
            const client = await dbConnect();
            const result = await client.query(`select Transaction._id , Transaction.totalAmount , Transaction.date , 
            CONCAT('[', GROUP_CONCAT(JSON_OBJECT(
            '_id', ComicBook._id, 'title', ComicBook.title, 'author', ComicBook.author,
            'publisher', ComicBook.publisher , 'Category' ,ComicBook.Category , 'price', ComicBook.price ,
            'description', ComicBook.description , 'image', ComicBook.image , 'pdf', ComicBook.pdf , 'sales', ComicBook.sales , 'date' , ComicBook.date
            )), ']') AS books
            from ComicBook join Transaction on ComicBook._id = Transaction.bookID where userID = ?` , userID)
            const tranbook = result[0]
            return res.status(200).send({
                tranbook
            })
        } catch (error) {
            reportError({message: getErrorMessage(error)})
            
        } 
} 