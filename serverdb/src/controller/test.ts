import { dbConnect } from '../lib/mysql';
import { Request , Response } from 'express';
import { reportError , getErrorMessage } from '../lib/Error';

export const test = async (req: Request , res: Response ) => {
    try {
        
        const client = await dbConnect();
        const { title, author, price, description, publisher, category , date} = req.body;
        const data = {
            title,
            author,
            publisher,
            category,
            price,
            description,
            image:1 ,
            pdf: 2,
            sales: 0,
            date: date || "curdate()" 
            };
        
        

        const addbook:any = await client.query(`INSERT INTO 
        Comic(title,price,description,image,pdf,sales,date) VALUES("${data.title}",${data.price},"${data.description}",
        "${data.image}","${data.pdf}",${data.sales},${data.date})`);
        
        const book:any = await client.query(`SELECT _id FROM Comic WHERE title = "${data.title}"` );

        const findpub:any = await client.query(`SELECT * FROM Publisher WHERE name = "${data.publisher}"`);
        
        await client.query(`INSERT INTO Publisher_Comic SET bookID = ${book[0][0]._id} , publisherID = ${findpub[0][0]._id}`)

        
        
        res.send("success")
    } catch (error) {
        reportError({message: getErrorMessage(error)})
        
    } 
}