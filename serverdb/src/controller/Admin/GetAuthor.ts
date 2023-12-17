import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const GetAuthor = async (req: Request , res: Response ) => {
    try {
        const { id } = req.params;
        const client = await dbConnect();
        const result = await client.query(`SELECT * FROM Author WHERE name = "?"`, id)
        const author = result[0]
        return res.status(200).send({
            author
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}