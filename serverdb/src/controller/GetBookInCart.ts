import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const GetBookInCart = async (req: Request , res: Response ) => {
    try {
        const { id } = req.query;
        const client = await dbConnect();
        const result = await client.query(`select ComicBook._id _id , title , author , publisher , category , price , description , image , pdf , sales , date
        from ComicBook join Cart on ComicBook._id = Cart.bookID userID = ?`, id)
        const bookcart = result[0]
        return res.status(200).send({
            bookcart
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}