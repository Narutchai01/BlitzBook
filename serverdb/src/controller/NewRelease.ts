import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const NewRelease = async (req: Request , res: Response ) => {
    try {
        const client = await dbConnect();
        const result = await client.query(`SELECT * FROM Comic ORDER BY comic_id DESC`)
        const newrelease = result[0]
        return res.status(200).send(newrelease)
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        res.status(500).send({
            meassage: "Error occurred while processing data"
        });
    } 
}