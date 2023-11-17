import { Request, Response } from 'express';
import { client, connectDB } from '../server';


export const signup = async (req: Request, res: Response) => {
    try {
        const { username, password, email, phonenumber } = req.body
        await connectDB()
        const createuser = {
            username,
            password,
            email,
            phonenumber
        }
        await client.db('user').collection('user').insertOne(createuser)
        res.status(201).json(createuser)
        client.close()
    }
    catch (error) {
        console.log('Error', error);
    }
}    