import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const GetMyCollection = async (req: Request , res: Response ) => {
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

        const result:any = await client.query(`select * from ComicBook join Transaction on ComicBook._id = Transaction.bookID where userID = ?;` , userID)
        
        if (result[0].length < 1) {
            res.status(404).send({
                message: "No transaction found"
            })
        }
        const MyCollection = result[0]
        return res.status(200).send({
            MyCollection
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        res.status(500).send({
            meassage: "Error occurred while processing data"
        });
    } 
} 