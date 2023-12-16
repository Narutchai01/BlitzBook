import {Request, Response} from 'express';
import {client , connectDB} from '../server';


export const getNewReleases = async (req: Request, res: Response) => {
    try {
        await connectDB();
        const books = (await client.db("Project_G").collection("books").find().toArray()).reverse();
        res.status(200).send(books);
    } catch (e) {
        console.log("Error", e);
    }
};