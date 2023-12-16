import { Request,Response } from "express";
import { client, connectDB } from "../../server";
import { ObjectId } from "mongodb";

export const deleteBookByID = async (req: Request, res: Response) => {
    try {
        await connectDB();
        const {id } = req.params;
        const result = await client.db("Project_G").collection("books").deleteOne({ _id: new ObjectId(id) });
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};