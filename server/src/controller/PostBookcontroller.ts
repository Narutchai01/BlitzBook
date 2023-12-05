import { Request, Response } from "express";
import { upLoadeIMG,upLoadePDF } from "../lib/supabase";
import { client } from "../server";

export const postbook = async (req: Request, res: Response) => {
    try {
        const img_url = await upLoadeIMG(req.file?.buffer);
        const pdf_url = await upLoadePDF(req.file?.buffer);
        const { title, author, price, description } = req.body;
        await client.connect();
        const data = {
            title,
            author,
            price,
            description,
            img_url,
            pdf_url,
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
