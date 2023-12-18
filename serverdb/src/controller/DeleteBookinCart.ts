import { Request , Response } from "express";
import { dbConnect } from "../lib/mysql";



export const DeleteBookinCart = async (req: Request , res: Response ) => {
    try {
        const { id } = req.query;
        const client = await dbConnect();
        await client.query(`DELETE FROM Cart WHERE _id = ?` , id)
        res.status(200).send({
            message: "Deleted"
        })
    } catch (error) {
        console.log(error);
        
    } 
}

export const DeleteBookinCartForCheckout = async (req: Request , res: Response ) => {
    try {
        const { id } = req.query;
        const client = await dbConnect();
        await client.query(`DELETE FROM Cart WHERE userID = ?` , id)
        res.status(200).send({
            message: "Deleted"
        })
    } catch (error) {
        console.log(error);
        
    }
}

