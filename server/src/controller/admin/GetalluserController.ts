import {client , connectDB} from "../../server";
import { Request,Response } from "express";

export const getalluser = async (req: Request, res: Response) => {
    try {
        // await client.connect();
        await connectDB();
        const result = await client.db("user").collection("user").find({role : "user"}).toArray(); 
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ message: "Internal server error" });
    }
}; 