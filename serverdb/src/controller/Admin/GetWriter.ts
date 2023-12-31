import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const GetWriter = async (req: Request , res: Response ) => {
    try {
        const { writer } = req.params;
        const client = await dbConnect();
        const result:any = await client.query(`SELECT * FROM ${writer}`)
        
        
        const table = result[0]
        return res.status(200).send({result: table});
    } catch (error) {
       console.log(error);
        
    } 
}