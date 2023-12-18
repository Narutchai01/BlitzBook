import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const NewRelease = async (req: Request , res: Response ) => {
    try {
        const client = await dbConnect();
        const result = await client.query(`SELECT * FROM ComicBook ORDER BY _id DESC`)
        const newrelease = result[0]
        return res.status(200).send(
            newrelease
        )
    } catch (error) {
        console.log(error);
        
    } 
}