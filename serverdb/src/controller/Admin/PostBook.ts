import { dbConnect } from '../../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../../lib/Error';
import { upLoadeIMG, upLoadePDF } from "../../lib/supabase";

export const PostBook = async (req: Request , res: Response ) => {
    
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
        const { title, author, price, description, publisher, category , date} = req.body;
        const client = await dbConnect();

        const image = Promise.all(url?.map((item: any) => {
        if (item && item.match(/\.jpg$/) && item !== undefined && item !== null) {
            return item;
        }
        }));
        const pdf = Promise.all(url?.map((item: any) => {
        if (item && item.match(/\.pdf$/) && item !== undefined && item !== null) {
            return item;
        }
        else {
            return false;
        }
        }));

        const pdfResult = await pdf;
        const imageData = await image;

        const data = {
        title,
        author,
        publisher,
        category,
        price,
        description,
        image: imageData[1],
        pdf: pdfResult[0],
        sales: 0,
        date
        };
            return res.status(200).send({
                author
            })
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}