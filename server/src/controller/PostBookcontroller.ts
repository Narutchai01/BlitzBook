import { Request, Response } from "express";
import { upLoade } from "../lib/supabase";
import { client } from "../server";

export const postbook = async (req: Request, res: Response) => {
    try {
        const img_url = await upLoade(req.file?.buffer);
        const { title, author, price, description } = req.body;
        await client.connect();
        const data = {
            title,
            author,
            price,
            description,
            img_url,
        };
        await client.db("Project_G").collection("books").insertOne(data);
        await client.close();
        res.status(200).send({
            status: "success",
            data: data,
        });
    } catch (error) {
        console.log(error);
        
    }
};
