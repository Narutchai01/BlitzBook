import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const GetBookInCart = async (req: Request , res: Response ) => {
    try {
        const { id } = req.query;
        const client = await dbConnect();
        await client.query(`select Comic._id _id , title , Author.name as author , Publisher.name publisher , 
        Category.name category , price , description , image , pdf , sales , Comic.date
        from ComicBook join Cart on ComicBook._id = Cart.bookID where userID = ?` , id)
        return res.status(200).send({
            message: "Get book in cart successed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}