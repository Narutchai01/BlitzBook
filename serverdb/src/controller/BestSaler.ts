import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const BestSaler = async (req: Request , res: Response ) => {
    try {
        
        const client = await dbConnect();
        const result:any = await client.query(`SELECT * FROM ComicBook ORDER BY sales DESC`)
        const BestSaler = result[0]
        return res.status(200).send({
            BestSaler
        });
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}