import { Request,Response } from "express";
import { client,connectDB } from "../server";
import { ObjectId } from "mongodb";


export const getBookinCart = async (req:Request,res:Response) => {
    try {
        await connectDB();
        const {userID} = req.query;
        const result = await client.db("Project_G").collection("Cart").find({userID:new ObjectId(String(userID))}).toArray();
        const bookID = result.map((item:any) => item.bookID);
        const book = await client.db("Project_G").collection("books").find({_id:{$in:bookID}}).toArray();
        res.status(200).send({message:"Get book in cart",result:book});
    } catch (error) {
        console.log(error);
    }
} ;