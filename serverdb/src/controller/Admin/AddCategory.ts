import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const AddCategory = async (req: Request , res: Response ) => {
    try {
        const {name} = req.body;
        const client = await dbConnect();
        if(!name){
            res.status(400).send({message:"Please enter Category name"});
            return false;
        }
        await client.query(`INSERT INTO Publisher(name) VALUES(?)`, name)
        return res.status(200).send({
            message: "Add Category successed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}
