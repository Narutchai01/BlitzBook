import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const GetBookInCart = async (req: Request , res: Response ) => {
    try {
        const { id } = req.query;
        const client = await dbConnect();
        const result:any = await client.query(`select ComicBook._id _id , title , author , publisher , category , price , description , image , pdf , sales , date
        from ComicBook join Cart on ComicBook._id = Cart.bookID WHERE userID = ?`, id)
        if (result[0].length < 1){
            res.status(404).send({
                message: "No comic in cart"
            })
        }
        const cart = result[0]
        return res.status(200).send({
            cart
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        res.status(500).send("Error occurred while processing data");
        
    } 
}