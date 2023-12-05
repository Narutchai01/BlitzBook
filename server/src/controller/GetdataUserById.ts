import { Request,Response } from "express";
import { client , connectDB } from "../server";
import { ObjectId } from "mongodb";


export const getDataUserByID = async (req: Request, res: Response) => {
    try {
        const { id } = req.query;
        await connectDB();
        const result = await client.db("user").collection("user").findOne({ _id: new ObjectId(id as string) });
        await client.close();
        res.status(200).json({ message: "success", data: result });
    } catch (e) {
        res.status(500).json({ message: "Internal server error" });
    }
};