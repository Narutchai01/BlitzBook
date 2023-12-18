import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const DeleteWriter = async (req: Request , res: Response ) => {
    try {
        const { id , type } = req.params;
        const client = await dbConnect();
        const check:any = await client.query(`SELECT * FROM ${type} WHERE _id = ${id}`)
        
        if (check[0].length < 1) {
            res.status(404).send({
                message: `${type} not found`
            })
            return false;
        }
        await client.query(`DELETE FROM ${type} WHERE _id = ${id}`)
        return res.status(200).send({
            message: `Delete ${type} successed`
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}