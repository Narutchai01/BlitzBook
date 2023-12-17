import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const DeleteBookByID = async (req: Request , res: Response ) => {
    try {
        const { id } = req.params;
        const client = await dbConnect();
        await client.query(`DELETE FROM Comic WHERE _id = ?` , { id })
        return res.status(200).send({
            message: "Delete book successed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}