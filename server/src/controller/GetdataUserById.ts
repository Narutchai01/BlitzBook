import { Request,Response } from "express";
import { client , connectDB} from "../server";
import { ObjectId } from "mongodb";


export const getDataUserByID = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await connectDB();
        const findUser = await client.db("user").collection("user").findOne({ _id: new ObjectId(id) });
        if (!findUser) {
            res.status(404).json({ message: "User not found" });
            return false;
        }
        res.status(200).json(findUser);
    } catch (e) {
        res.status(500).json({ message: "Internal server error" });
    }
};