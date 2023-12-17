import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const BestSaler = async (req: Request , res: Response ) => {
    try {
        
        const client = await dbConnect();
        await client.query(`SELECT * FROM ComicBook ORDER BY sales DESC`)
        return res.status(200).send({
            message: "Get best saler successed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}