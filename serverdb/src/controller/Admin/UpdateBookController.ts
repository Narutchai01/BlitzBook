import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const UpdateBook = async (req: Request , res: Response ) => {
    try {
        const { id } = req.params;
        const { title , price } = req.body;
        const client = await dbConnect();
        
        if ( title === "" && price === "") {
            return res.status(400).send({ message: "Please fill all required field" });
        }
        else if ( title === undefined && price === undefined) {
            return res.status(400).send({ message: "Please fill all required field" });
        }
        else if ( title === null && price === null) {
            return res.status(400).send({ message: "Please fill all required field" });
        } else if ( title && price ){
            await client.query(`UPDATE FROM Comic SET title = "${title}" , price = ${price} WHERE .id = ${id}`);
        } else if ( title ) {
            client.query(`UPDATE FROM Comic SET title = "${title}" WHERE .id = ${id}`);
        } else if ( price ){
            client.query(`UPDATE FROM Comic SET price = ${price} WHERE .id = ${id}`);
        }
        
        res.status(200).send({
            message: "Update comic successed"    
        })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
    
    } 
}