import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const GetDataUserByID = async (req: Request , res: Response ) => {
    try {
        const { id } = req.params;
        const client = await dbConnect();
        await client.query(`SELECT * FROM User WHERE _id = ?` , id)
        return res.status(200).send({
            message: "Get user data successed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}