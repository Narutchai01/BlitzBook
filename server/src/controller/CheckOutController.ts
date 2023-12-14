import { Request,Response } from "express";
import { client, connectDB } from "../server";



export const CheckoutController = async (req:Request,res:Response) => {
    try {
        const {userID , bookID ,totalAmout} = req.body;
        const transactionData = {
            userID,
            bookID,
            totalAmout,
            data : new Date()
        };
        await connectDB();
        const result = await client.db("Project_G").collection("Transaction").insertOne(transactionData);
        res.status(200).send({
            checkout: "succsec",
            data : result
        });
    } catch (error) {
        console.log(error);
        
    }
};