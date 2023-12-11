import { Request,Response } from "express";
import { client, connectDB } from "../../server";
import { ObjectId } from "mongodb";

export const DeleteWritter = async (req:Request,res:Response) => {
    try {
        const {type,id} = req.params;
        await connectDB();
        const result = await client.db("Project_G").collection(type).deleteOne({_id: new ObjectId(id)});
        res.status(200).send({
           result
        });
    } catch (error) {
       console.log(error);

    }
};