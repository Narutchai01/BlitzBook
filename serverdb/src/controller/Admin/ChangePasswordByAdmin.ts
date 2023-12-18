import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const ChangePasswordByAdmin = async (req: Request , res: Response ) => {
    try {
        const { id } = req.params;
        const { password } = req.body;
        const client = await dbConnect();
        const check:any = await client.query(`SELECT * FROM User WHERE _id = ?`, id)

        if (check[0].length < 1) {
            res.status(400).send({
                message: "User not found"
            })
            return false;
        }
        await client.query(`UPDATE User SET password = "?" WHERE _id = ?` , { password , id })
        return res.status(200).send({
            message: "Update password successed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        res.status(500).send("Error occurred while processing data");
        
    } 
}