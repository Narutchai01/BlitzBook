import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const GetDataUserByID = async (req: Request , res: Response ) => {
    try {
        const { id } = req.params;
        const client = await dbConnect();
        const result:any = await client.query(`SELECT * FROM User WHERE _id = ?` , id)
        if (result[0].length < 1) {
            res.status(404).send({
                message: "User not found"
            })
        }
        const User = result[0]
        return res.status(200).send({
            User
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        res.status(500).send({
            meassage: "Error occurred while processing data"
        });
    } 
}