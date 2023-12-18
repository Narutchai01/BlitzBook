import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const AddtoCart = async (req: Request , res: Response ) => {
    try {
        const { userID , bookID } = req.query;
        
        const client = await dbConnect();
        const check:any = await client.query(`SELECT * FROM Cart WHERE userID = ${userID} AND bookID = ${bookID}`)
        
        
        if (check[0].length > 0) {
            res.status(400).send({
                message: "Comic already in cart"
            });
            return false;
        };
        await client.query(`INSERT INTO Cart(userID, bookID) VALUES(${userID} , ${bookID})`)
        return res.status(201).send({
            message: "Add to cart successed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}