import { Request, Response } from 'express';
import { client, connectDB } from '../server';
import { secret } from '../server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response) => {
    try {
        // get the email and password from the req.body
        const { email, password } = req.body;
        // call the connectDB function
        await connectDB();
        // search user by email
        const result = await client.db('user').collection('user').findOne({ email });
        // if not found, send a 400 (bad request) response
        if (!result) {
            return res.status(400).json({ message: 'not users' });
        }
        // compare the password with the hash password saved in the database
        const passMatch = await bcrypt.compare(password, result.password);
        // if not match, send a 400 (bad request) response
        if (!passMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        // create a jwt token
        const token = jwt.sign({ result }, secret, { expiresIn: '1h' });
        // set the token to httpOnly cookie
        res.cookie('token', token, { httpOnly: true });
        // send a 200 (ok) response with the user data
        res.status(200).json(result);
        // close the connection
        await client.close();
    } catch (error) {
        // if error, send a 500 (internal server error) response
        console.log(error);
        res.status(500).json({ message: 'something went wrong' });
    }

};