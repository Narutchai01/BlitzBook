import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const AddSeries = async (req: Request , res: Response ) => {
    try {
        const {name} = req.body;
        const client = await dbConnect();
        if(!name){
            res.status(400).send({message:"Please enter Series"});
            return false;
        }
        await client.query(`INSERT INTO Publisher(name) VALUES(?)`, name)
        return res.status(201).send({
            message: "Add Series successed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        res.status(500).send({
            meassage: "Error occurred while processing data"
        });
    } 
}
