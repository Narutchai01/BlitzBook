import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const AddCategory = async (req: Request , res: Response ) => {
    try {
        const {name} = req.body;
        const client = await dbConnect();
        const check:any = await client.query(`SELECT * FROM Category WHERE name = "${name}"`)

        if(!name){
            res.status(400).send({
                message:"Please enter Category name"
            });
            return false;
        } else if(check[0].length > 0) {
            res.status(400).send({
                message:"Category already exist"
            });
            return false;
        }
        await client.query(`INSERT INTO Category(name) VALUES(?)`, name)
        return res.status(201).send({
            message: "Add Category successed",
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}
