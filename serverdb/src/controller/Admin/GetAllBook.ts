import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const GetAllBook = async (req: Request , res: Response ) => {
    try {
        const client = await dbConnect();
        const result:any = await client.query(`SELECT * FROM ComicBook`)
        const book = result[0]
        return res.status(200).send({
            book    
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}