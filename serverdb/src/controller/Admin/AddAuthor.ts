import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const AddAuthor = async (req: Request , res: Response ) => {
    try {
        const {name} = req.body;
        const client = await dbConnect();
        if(!name){
            res.status(400).send({message:"Please enter Author Name"});
            return false;
        }
        await client.query(`INSERT INTO Author(name) VALUES(?)`, name)
        return res.status(201).send({
            message: "Add Author successed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}
