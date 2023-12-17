import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';
    
    export const MyPurchase = async (req: Request , res: Response ) => {
        try {
            const { userID } = req.query; 
            const client = await dbConnect();
            await client.query(`SELECT * FROM Transaction WHERE userID = "?"` , [userID])
            return res.status(200).send({
                message: "Get my purchase",
            })
        } catch (error) {
            reportError({message: getErrorMessage(error)})
            
        } 
} 