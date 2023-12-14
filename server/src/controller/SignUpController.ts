import { Request, Response } from 'express';
import { client, connectDB } from '../server';
import { hashPassword } from '../lib/ManagementPassWord';



export const signup = async (req: Request, res: Response) => {
    try {
        const { username, password, email ,role ,date , fname , lname } = req.body;
        await connectDB();
        const createuser = {
            fname,
            lname,
            username ,
            date,
            password: await hashPassword(password),
            email,
            role : role || "user"
        };
        await client.db('user').collection('user').insertOne(createuser);
        res.status(201).json(createuser);
        await client.close();
    }
    catch (error) {
        console.log('Error', error);
    }
}   ;