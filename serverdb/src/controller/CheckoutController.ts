import { Request , Response } from "express";
import { dbConnect } from "../lib/mysql";
import { v4 as uuidv4 } from "uuid";



export const CheckoutController = async (req: Request, res: Response) => {
    try {
        const { userID, bookID, totalAmout } = req.body;

        const _id = uuidv4();

       const result = await Promise.all(bookID?.map(async (item: any) => {
            const client = await dbConnect();
            await client.query(`INSERT INTO Transaction (_id, userID, bookID, totalAmout, date) VALUES (?,?,?,?,?)`, [_id, userID, item, totalAmout, new Date()]);
            await client.query(`update Comic set sales = sales + 1 where _id = ?`, item);
        }));
        res.status(200).send({
            checkout: "succsec",
            data: result,
        
        });
    } catch (error) {
        console.log(error);
        
    }
};