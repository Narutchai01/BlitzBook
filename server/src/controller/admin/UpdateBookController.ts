import { Request,Response } from "express";
import { client, connectDB } from "../../server";

export const UpdateBook = async (req:Request,res:Response)=>{
    try {
        // Get the ID, title, and price for the book
        const {_id,title,price} = req.body;
        // Connect to the database
        await connectDB();
        // Create an object to update the book
        const updateBook = {
            title,
            price
        };
        // Update the book in the book collection
        await client.db("book").collection("book").updateOne({_id},{$set:updateBook});
        // Send the updated book back to the requester
        res.status(201).json(updateBook);
    } catch (error) {
        console.log("Error",error);
        
    }
};