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
        date: date || "curdate()" 
        };

        const checkcom:any = await client.query(`SELECT * FROM Comic WHERE title = "${data.title}"`)
    
        if (title || author || price || description || publisher || category|| date || dataFile === null ) {
            res.status(400).send({
                message: "Please fill all of required field"
            })
        } else if (checkcom[0].length > 0) {
            res.status(400).send({
                message: "Comic already exist"
            })
            return false;
        } else if (data.description.length > 255) {
            res.status(400).send({
                message: "Description too long"
            })
            return false;
        } 
        // add book
        const addbook:any = await client.query(`INSERT INTO 
        Comic(title,price,description,image,pdf,sales,date) VALUES("${data.title}",${data.price},"${data.description}",
        "${data.image}","${data.pdf}",${data.sales},${data.date})`)
        
        //get bookid
        const book:any = await client.query(`SELECT _id FROM Comic WHERE title = "${data.title}"`)
    
        //add publsiher to book
        const findpub:any = await client.query(`SELECT * FROM Publisher WHERE name = "${data.publisher}"`);
        if (findpub[0].length < 1) {
            res.status(404).send({
                message: "Publisher not found"
            });
            return false;
        };
        await client.query(`INSERT INTO Publisher_Comic SET bookID = ${book[0][0]._id} , publisherID = ${findpub[0][0]._id}`)
        
        // add author to book
        const findaut:any = await client.query(`SELECT * FROM Author WHERE name = "${data.author}"`)
        if (findaut[0].length < 1) {
            res.status(404).send({
                message: "Author not found"
            });
            return false;
        };
        await client.query(`INSERT INTO Author_Comic SET bookID = ${book[0][0]._id} , authorID = ${findaut[0][0]._id}`)

        //add category to book
        const findcat:any = await client.query(`SELECT * FROM Category WHERE name = "${data.category}"`)
        if (findcat[0].length < 1) {
            res.status(404).send({
                message: "Category not found"
            });
            return false;
        };
        await client.query(`INSERT INTO Category_Comic SET bookID = ${book[0][0]._id} , categoryID = ${findcat[0][0]._id}`)

        const result:any = await client.query(`SELECT * FROM ComicBook WHERE _id = ${book[0][0]._id}`)
        res.status(200).send(result[0])
            
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        res.status(500).send({
            meassage: "Error occurred while processing data"
        });
    } 
}