import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const GetAllUser = async (req: Request , res: Response ) => {
    try {
        const client = await dbConnect();
        const result = await client.query(`SELECT * FROM User`)
        const user = result[0]
        return res.status(200).send({
            user
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}