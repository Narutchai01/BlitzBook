import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const AddPublisher = async (req: Request , res: Response ) => {
    try {
        const {name} = req.body;
        const client = await dbConnect();
        const check:any = await client.query(`SELECT * FROM Publisher WHERE name = "${name}"`)
    
        if(!name){
            res.status(400).send({
                message:"Please enter Publisher name"
            });
            return false;
        } else if(check[0].length > 0) {
            res.status(400).send({
                message:"Publisher already exist"
            });
            return false;
        }
        await client.query(`INSERT INTO Publisher(name) VALUES(?)`, name)
        return res.status(201).send({
            message: "Add Publisher successed"
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        res.status(500).send("Error occurred while processing data");
        
    } 
}
