import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';

export const UpdateBook = async (req: Request , res: Response ) => {
    try {
        const { id } = req.params;
        const { title , price } = req.body;
        const client = await dbConnect();
        
        
        if ( title === "" && price === "") {
            res.status(400).send({
                 message: "Please fill some of required field" 
                });
        }
        else if ( title === undefined && price === undefined) {
            res.status(400).send({
                 message: "Please fill some of required field"
                 });
        }
        else if ( title === null && price === null) {
            res.status(400).send({ 
                message: "Please fill some of required field" 
            });
        } else if ( title && price ){
            await client.query(`UPDATE Comic SET title = "${title}" , price = ${price} WHERE _id = ${id}`);
            res.status(200).send({
                message: "Update title and price of comic successed"    
            })
        } else if ( title ) {
            await client.query(`UPDATE Comic SET title = "${title}" WHERE _id = ${id}`);
            res.status(200).send({
                message: "Update title of comic successed"    
            })
        } else if ( price ){
            await client.query(`UPDATE Comic SET price = ${price} WHERE _id = ${id}`);
            res.status(200).send({
                message: "Update price of comic successed"    
            })
        }
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        res.status(500).send({
            meassage: "Error occurred while processing data"
        });
    } 
}