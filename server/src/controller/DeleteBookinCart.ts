import { Request,Response } from "express";
import { client, connectDB } from "../server";
import { ObjectId } from "mongodb";


export const DeleteBookinCart = async (req:Request,res:Response) => {
try {
    await connectDB();
    const {id} = req.query;
    const deleteBookinCart = await client.db("Project_G").collection("Cart").deleteOne({_id:new ObjectId(id as string)});
    res.status(200).send({message:"Delete book in cart",deleteBookinCart});
} catch (error) {
    console.log(error);
}
};


export const DeleteBookinCartForCheckout = async (req:Request,res:Response) => {
    try {
        const {id} = req.query;
        const result = await client.db("Project_G").collection("Cart").deleteMany({userID: new ObjectId(id as string)});
        res.status(200).send({message:"Delete book in cart",result});
    } catch (error) {
     console.log(error);
        
    }
};