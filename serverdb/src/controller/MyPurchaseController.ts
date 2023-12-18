import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';
    
    export const MyPurchase = async (req: Request , res: Response ) => {
        try {
            const { userID } = req.query; 
            const client = await dbConnect();
            const check:any = await client.query(`SELECT * FROM User WHERE _id = ?`, userID)

            if (check[0].length < 1) {
                res.status(400).send({
                    message: "User not found"
                })
                return false;
            }

            const result:any = await client.query(`select t1._id , t1.totalAmount , t1.date , 
            CONCAT('[', GROUP_CONCAT(JSON_OBJECT(
            '_id', ComicBook._id, 'title', ComicBook.title, 'author', ComicBook.author,
            'publisher', ComicBook.publisher , 'Category' ,ComicBook.Category , 'price', ComicBook.price ,
            'description', ComicBook.description , 'image', ComicBook.image , 'pdf', ComicBook.pdf , 'sales', ComicBook.sales , 'date' , ComicBook.date
            )), ']') AS books
            from ComicBook join Transaction t1 on ComicBook._id = t1.bookID join Transaction t2 on t1._id = t2._id where t1.userID = ? ` , userID)
            
            if (result[0].length < 1) {
                res.status(404).send({
                    message: "No transaction found"
                })
            }
            const transaction = result[0]
            return res.status(200).send(transaction)
        } catch (error) {
            reportError({message: getErrorMessage(error)})
            res.status(500).send({
                meassage: "Error occurred while processing data"
            });
        } 
} 