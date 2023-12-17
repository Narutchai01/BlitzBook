import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const NewRelease = async (req: Request , res: Response ) => {
    try {
        const client = await dbConnect();
        await client.query(`SELECT * FROM Comic ORDER BY comic_id DESC`)
        return res.status(200).send({
            message: "Get New Release",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}