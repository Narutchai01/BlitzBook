import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const GetBookByID = async (req: Request , res: Response ) => {
    try {
        const { id } = req.params;
        const client = await dbConnect();
        const result:any = await client.query(`SELECT * FROM ComicBook WHERE _id = ?` , id)
        const bookbyid = result[0][0]
        return res.status(200).send({
            bookbyid
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}