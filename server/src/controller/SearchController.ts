import { Request,Response } from "express";
import { client , connectDB } from "../server";


export const searchbook = async (req: Request, res: Response) => {
    try {
        await connectDB();
        const result = await client.db("Project_G").collection("books").find({}).toArray();
        res.status(200).send(result);
    } catch (e) {
        res.status(500).json({ message: "Internal server error" });
    }
};