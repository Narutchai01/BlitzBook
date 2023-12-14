import { Request, Response } from "express";
import { upLoadeIMG, upLoadePDF } from "../../lib/supabase";
import { client } from "../../server";
import { ObjectId } from "mongodb";

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

    const { title, author, price, description , publisher ,category  } = req.body;
    await client.connect();


    
    const data = {
      title,
      author : new ObjectId(author),
      publisher : new ObjectId(publisher) ,
      category : new ObjectId(category),
      price,
      description,
      image: url[0],
      pdf: url[1],
      sales: 0,
      date : new Date()


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
