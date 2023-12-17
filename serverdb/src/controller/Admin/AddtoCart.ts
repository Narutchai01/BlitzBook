import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const AddtoCart = async (req: Request , res: Response ) => {
    try {
        const { userID , bookID } = req.query;
        const client = await dbConnect();
        await client.query(`INSERT INTO Cart(userID, bookID) VALUES(?,?)`, { userID , bookID } )
        return res.status(200).send({
            message: "Add to cart successed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}