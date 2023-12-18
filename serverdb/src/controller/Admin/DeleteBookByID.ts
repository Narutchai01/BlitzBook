import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const DeleteBookByID = async (req: Request , res: Response ) => {
    try {
        const { id } = req.params;
        const client = await dbConnect();
        const check:any = await client.query(`SELECT * FROM Comic WHERE _id = ?` , id)
        
        if (check[0].length < 1) {
            res.status(404).send({
                message: "Comic not found"
            });
            return false;
        };
        await client.query(`DELETE FROM Comic WHERE _id = ?` , id)
        return res.status(200).send({
            message: "Delete book successed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        res.status(500).send("Error occurred while processing data");
        
    } 
}