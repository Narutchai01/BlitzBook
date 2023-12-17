import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const GetBookByID = async (req: Request , res: Response ) => {
    try {
        const { id } = req.params;
        const client = await dbConnect();
        await client.query(`SELECT * FROM ComicBook WHERE _id = "?"` , id)
        return res.status(200).send({
            message: "Get book successed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}