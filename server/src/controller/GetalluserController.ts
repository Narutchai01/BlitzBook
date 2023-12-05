import {client , connectDB} from "../server";
import { Request,Response } from "express";

export const getalluser = async (req: Request, res: Response) => {
    try {
        await connectDB();
        const db = client.db("user");
        const collection = db.collection("user");
        const result = await collection.find({}).toArray();
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ message: "Internal server error" });
    }
}; 