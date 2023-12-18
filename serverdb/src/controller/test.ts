import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';
import { QueryResult } from '@supabase/supabase-js';

export const test = async (req: Request , res: Response ) => {
    try {
        
        const client = await dbConnect();
        const result:any = client.query(`SELECT * FROM Comic WHERE _id = 137`)
        const map = result[0].map((item:any) => {
            return {
                _id: item._id,
                title: item.title
            }
        })
        res.send(map)
        
    } catch (error) {
        reportError({message: getErrorMessage(error)})
     
        
    } 
}