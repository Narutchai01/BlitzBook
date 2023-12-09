import { Request, Response } from 'express';
import { client, connectDB } from '../server';
import { secret } from '../server';
import jwt from 'jsonwebtoken';
import { matchPassword } from '../lib/ManagementPassWord';

export const login = async (req: Request, res: Response) => {
    try {
        await connectDB();
        const { email, password } = req.body;
        const findEmail = await client.db('user').collection('user').findOne({ email: email });
        if (!findEmail) {
            res.status(400).json({ message: 'email not found' });
            return false;
        }
        const MatchPassword = await matchPassword(password, findEmail.password);
        if (!MatchPassword) {
            res.status(400).json({ message: 'password not match' });
            return false;
        }
        const payload = { id: findEmail._id ,role:findEmail.role };
        const token = jwt.sign(payload, secret, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: 'login success', result: findEmail});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something went wrong' });
    }

};