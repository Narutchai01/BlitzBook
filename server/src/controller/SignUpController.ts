import { Request, Response } from 'express';
import { client, connectDB } from '../server';
const bcrypt = require('bcrypt');


const saltRounds = 10;
const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash
};

export const signup = async (req: Request, res: Response) => {
    try {
        const { username, password, email, phonenumber } = req.body
        await connectDB()
        const createuser = {
            username,
            password: await hashPassword(password),
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