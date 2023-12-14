import { Request, Response } from "express";
import { client, connectDB } from "../server";
import { ObjectId } from "mongodb";

export const test = async (req: Request, res: Response) => {
    try {
        const { bookID } = req.body;
        await connectDB();
        bookID?.map(async (item: any) => {
            const result = await client.db("Project_G").collection("books").findOne({ _id: new ObjectId(item) });
            const result2 = await client.db("Project_G").collection("books").updateOne({ _id: result?._id }, { $set: { sales: result?.sales +1 } });
            console.log(result2);
        });
        res.status(200).send({
            test: "succsec"
        });
    } catch (error) {
        console.log(error);

    }
};