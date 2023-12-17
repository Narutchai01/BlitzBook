import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const UpdateBook = async (req: Request , res: Response ) => {
    try {
        const { id , title , price } = req.body;
        const client = await dbConnect();
        await client.query(`UPDATE FROM Comic SET title = ? , price = ? WHERE .id = ?` , { title , price , id});
        return res.status(201).send({
            message: "Update comic successed"    
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
    
    } 
}