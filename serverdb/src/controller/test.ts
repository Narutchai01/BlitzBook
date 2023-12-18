import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const test = async (req: Request , res: Response ) => {
    try {
        
        const client = await dbConnect();
        const result:any = await client.query(`select concat('[', group_concat(json_object("name",name,"_id",_id)),']') from Author`);
    
        
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        console.error("Error parsing JSON:", error);
        res.status(500).send("Error occurred while processing data");
        
    } 
}