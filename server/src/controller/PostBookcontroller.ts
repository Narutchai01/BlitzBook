import { Request, Response } from "express";
import { upLoadeIMG, upLoadePDF } from "../lib/supabase";
import { client } from "../server";

export const postbook = async (req: Request, res: Response) => {
  try {
    const dataFile = req.files;

    const url = await Promise.all(
      (dataFile as any[]).map(async (file: any) => {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
          const url = await upLoadeIMG(file.buffer);
          return url;
        } else if (file.mimetype === "application/pdf") {
          const url = await upLoadePDF(file.buffer);
          return url;
        }
      })
    );

    const { title, author, price, description } = req.body;
    await client.connect();
    const data = {
      title,
      author,
      price,
      description,
      ref_url: url,
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
