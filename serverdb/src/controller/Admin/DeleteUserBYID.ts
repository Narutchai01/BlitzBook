import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const DeleteUserByID = async (req: Request , res: Response ) => {
    try {
        const { id } = req.params;
        const client = await dbConnect();
        const check:any = await client.query(`SELECT * FROM User WHERE _id = ?`, id)
        
        if (check[0].length < 1) {
            res.status(404).send({
                message: "User not found"
            })
            return false;
        }
        await client.query(`DELETE FROM User WHERE _id = ?` , id)
        return res.status(200).send({
            message: "Delete user successed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        res.status(500).send({
            meassage: "Error occurred while processing data"
        });
    } 
}